
/*------- ANIMATION -------*/

function Animation() {}

Animation.prototype.hide = function() {
	$('#'+this.name).hide();
	return this;
}

Animation.prototype.show = function() {
	$('#'+this.name).show();
	return this;
}