
/*------- ANIMATION -------*/

Object.prototype.hide = function() {
	$('#'+this.name).hide();
	return this;
}

Object.prototype.show = function() {
	$('#'+this.name).show();
	return this;
}