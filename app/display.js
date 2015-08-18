

/*------- SCREEN -------*/

function Screen(name) {

	this.name = name.replace(/\s+/g, "");

	var screen_ = document.createElement("ga-screen");
	screen_.id = this.name; 

	document.getElementsByTagName('ga-jsga')[0].appendChild(screen_);

	this.$ = $('#' + this.name);

	$Screens.all.push(this);

	return this;
}

var $Screens = {};
$Screens.all = [];
$Screens.find = function(name) {
	for(var i=0,len=$Screens.all.length; i<len; i++)
		if($Screens.all[i].name===name)
			return $Screens.all[i];
}

/*------- LAYER -------*/

function Layer(name, screen, options) {

	var settings = $.extend({
		col: 8,
		row: 'auto'
	}, options);

	this.name = name.replace(/\s+/g, "");

	var layer_ = document.createElement("ga-layer");
	layer_.id = this.name;
	layer_.className = 'col-' + settings.col + ' row-' + settings.row;

	document.getElementById(screen.name).appendChild(layer_);

	screen[this.name] = this;
	this.$ = $('#' + this.name);

	$Layers.all.push(this);

	return this;
}

var $Layers = {};
$Layers.all = [];
$Layers.find = function(name) {
	for(var i=0,len=$Layers.all.length; i<len; i++)
		if($Layers.all[i].name===name)
			return $Layers.all[i];
}

/*------- COMPONENT -------*/

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

	$Components.all.push(this);

	return this;
}

var $Components = {};
$Components.all = [];
$Components.find = function(name) {
	for(var i=0,len=$Components.all.length; i<len; i++)
		if($Components.all[i].name===name)
			return $Components.all[i];
}



