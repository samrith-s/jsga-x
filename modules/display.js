
/*------- SCREEN -------*/

function Screen(name) {

	this.name = name.replace(/\s+/g, "");

	var screen_ = document.createElement("screen");
	screen_.id = this.name; 

	document.getElementsByTagName('jsga')[0].appendChild(screen_);

	return this;
}

/*------- LAYER -------*/

function Layer(name, screen, options) {

	this.name = name.replace(/\s+/g, "");

	var layer_ = document.createElement("layer");
	layer_.id = this.name;

	document.getElementById(screen.name).appendChild(layer_);

	screen[this.name] = this;

	return this;
}

/*------- COMPONENT -------*/

function Component(name, layer, options) {

	this.name = name.replace(/\s+/g, "");

	var component_ = document.createElement("component");
	component_.id = this.name;

	document.getElementById(layer.name).appendChild(component_);

	layer[this.name] = this;

	return this;
}




