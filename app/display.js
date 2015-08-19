
/**
 * Screen class that allows creation of new screens
 *
 * @class  Screen
 * 
 * @param {string} name - A unique name for the screen
 * @return {object} Current object after creating
 * @constructor
 * @example
 * 	var scrn = new Screen('myScreen');
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

//a function to find screen by name from all screens created
$Screens.find = function(name) {
	for(var i=0,len=$Screens.all.length; i<len; i++)
		if($Screens.all[i].name===name)
			return $Screens.all[i];
}

/**
 * Layer class that allows creation of new layers 
 *
 * @class  Layer
 * 
 * @param {string} name - A unique name for the layer
 * @param {object} target - A screen or layer object to add the layer to
 * @param {object} [options] - A JSON object of options
 * @return {object} Current object after creating
 * @constructor
 * @example
 * 	var scrn = new Screen('myScreen');
 * 	var layr = new Layer('myScreen', scrn, {col:12, row: 'auto', x:0, y:0});
 */
function Layer(name, screen, options) {

	var settings = $.extend({
		col: 12,
		row: 'auto',
		x: 0,
		y: 0
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

//a function to find screen by name from all screens created
$Layers.find = function(name) {
	for(var i=0,len=$Layers.all.length; i<len; i++)
		if($Layers.all[i].name===name)
			return $Layers.all[i];
}

/**
 * Change the current parent container of the layer or component object
 *
 * @method changeParent
 * @param {object} current - The current parent (screen or layer) object
 * @param {object} target - The target screen or layer object
 * @return {object} Current object after creating
 * @example
 * 	var scrn = new Screen('myScreen');
 * 	var scrn2 = new Screen('myOtherScreen');
 * 	var layr = new Layer('myLayer', scrn);
 * 	layr.changeParent(scrn, scrn2);
 */
Layer.prototype.changeParent = function(current, target) {
	document.getElementById(target.name).appendChild(document.getElementById(this.name));
	target[this.name] = this;
	delete current[this.name];
	return this;
}

/**
 * Component class allows creation of new components 
 *
 * @class  Component
 * 
 * @param {string} name - A unique name for the component
 * @param {object} target - A screen or layer object to add the component to
 * @param {object} [options] - A JSON object of options
 * @return {object} Current object after creating
 * @constructor
 * @example
 * 	var scrn = new Screen('myScreen');
 * 	var layr = new Layer('myScreen', scrn);
 * 	var myComp = new Component('myComponent', layr, {
 * 		type: 'img',
 * 		classes: 'class1 class2',
 * 		image: {
 * 			path:'path/to/img.png',
 * 			alt: 'alt Img Name',
 * 			title: 'title of image'
 * 		}
 * 	});
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

//a function to find screen by name from all screens created
$Components.find = function(name) {
	for(var i=0,len=$Components.all.length; i<len; i++)
		if($Components.all[i].name===name)
			return $Components.all[i];
}

/**
 * Change the current parent container of the layer or component object
 *
 * @method changeParent
 * @param {object} current - The current parent (screen or layer) object
 * @param {object} target - The target screen or layer object
 * @return {object} Current object after creating
 * @example
 * 	var scrn = new Screen('myScreen');
 * 	var scrn2 = new Screen('myOtherScreen');
 * 	var myComp = new Component('myComp', scrn, {
 * 		type: 'img',
 * 		classes: 'class1 class2',
 * 		image: {
 * 			path:'path/to/img.png',
 * 			alt: 'alt Img Name',
 * 			title: 'title of image'
 * 		}
 * 	});
 * 	myComp.changeParent(scrn, scrn2);
 */
Component.prototype.changeParent = function(current, target) {
	document.getElementById(target.name).appendChild(document.getElementById(this.name));
	target[this.name] = this;
	delete current[this.name];
	return this;
}




