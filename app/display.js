

/*------- SCREEN -------*/
/**
 * @class
 * 
 *	Screen class that allows creation of new screen 
 * 
 * @param {string} name - A unique name for the screen
 */
function Screen(name) {

	this.name = name.replace(/\s+/g, "");

	var screen_ = document.createElement("ga-screen");
	screen_.id = this.name; 

	document.getElementsByTagName('ga-jsga')[0].appendChild(screen_);

	this.$ = $('#' + this.name);

	this.DOM = document.getElementById(this.name);

	$Screens.all.push(this);

	return this;
}

var $Screens = {};		//Global variable containing all screen
$Screens.all = [];		//Array of all created screens

/**
 * @function
 * 
 *	Function to find Screen by name
 * 
 * @param {string} name - Name of the screen
 */
$Screens.find = function(name) {
	for(var i=0,len=$Screens.all.length; i<len; i++)
		if($Screens.all[i].name===name)
			return $Screens.all[i];
}

/*------- LAYER -------*/

/**
 * @class
 * 
 *	Layer class that allows creation of new layer 
 * 
 * @param {string} name - A unique name for the layer
 * @param {object} screen - Screen or layer element to place the Layer
 * @param {optionsHash} options
 */
function Layer(name, screen, options) {

	var settings = $.extend({
		col: 8,
		row: 'auto',
		x: 3,
		y: 2
	}, options);

	this.name = name.replace(/\s+/g, "");

	var layer_ = document.createElement("ga-layer");
	layer_.id = this.name;
	layer_.className = 'col-' + settings.col + ' row-' + settings.row + ' x-' + settings.x + ' y-' + settings.y;

	document.getElementById(screen.name).appendChild(layer_);

	screen[this.name] = this;
	this.$ = $('#' + this.name);

	this.DOM = document.getElementById(this.name);

	$Layers.all.push(this);

	return this;
}

var $Layers = {};		//Global variable containing all Layer
$Layers.all = [];		//Array of all created layers		

/**
 * @function
 * 
 *	Function to find Layer by name
 * 
 * @param {string} name - Name of the Layer
 */
$Layers.find = function(name) {
	for(var i=0,len=$Layers.all.length; i<len; i++)
		if($Layers.all[i].name===name)
			return $Layers.all[i];
}
/**
 * @function
 * 
 *	Function to change the parent container of the layer
 * 
 * @param {object} current - Current parent container object
 * @param {object} target - Target parent conrainer object
 */
Layer.prototype.changeParent = function(current, target) {
	document.getElementById(target.name).appendChild(document.getElementById(this.name));
	target[this.name] = this;
	delete current[this.name];
	return this;
}


/*------- COMPONENT -------*/
/**
 * @class
 * 
 *	Component class that allows creation of new Component 
 * 
 * @param {string} name - A unique name for the component
 * @param {object} layer - Screen or layer element to place the component
 * @param {optionsHash} options
 */
function Component(name, layer, options) {

	var settings = $.extend({
		type: 'div',
		classes: '',
		text: '',
		image: {
			path: '',
			alt: '',
			title: ''
		}
	}, options);

	this.name = name.replace(/\s+/g, "");

	var component_ = document.createElement(settings.type);
	component_.id = this.name;
	component_.className = 'ga-component' + ' ' + settings.classes;

	if(settings.text!=='' || settings.text!==null) {
		var componentTxt_ = document.createTextNode(settings.text);
		component_.appendChild(componentTxt_);
	}

	if(settings.type==='img') {
		component_.src = settings.image.path;
		component_.alt = settings.image.alt;
		component_.title = settings.image.title;
	}

	document.getElementById(layer.name).appendChild(component_);

	layer[this.name] = this;
	this.$ = $('#' + this.name);

	this.DOM = document.getElementById(this.name);

	$Components.all.push(this);

	return this;
}

var $Components = {};		//Global variable containing all Component
$Components.all = [];		//Array of all created component

/**
 * @function
 * 
 *	Function to find component by name
 * 
 * @param {string} name - Name of the component
 */

$Components.find = function(name) {
	for(var i=0,len=$Components.all.length; i<len; i++)
		if($Components.all[i].name===name)
			return $Components.all[i];
}

/**
 * @function
 * 
 *	Function to change the parent container of the component
 * 
 * @param {object} current - Current parent container object
 * @param {object} target - Target parent container object
 */

Component.prototype.changeParent = function(current, target) {
	document.getElementById(target.name).appendChild(document.getElementById(this.name));
	target[this.name] = this;
	delete current[this.name];
	return this;
}




