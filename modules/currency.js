
var Currencies={};

Currencies.all = [];

Currencies.find = function(name) {
	for(var i=0,len=Currencies.all.length; i<len; i++)
		if(Currencies.all[i].name===name)
			return Currencies.all[i];
}



/*------- CURRENCY -------*/

function Currency(name, min, max, value, options) {

	var settings = $.extend({
		callback: function() {},
		icon: ""
	}, options);

	this.name = name;
	this.min = min;
	this.max = max;
	this.val = value;

	Currencies.all.push(this);

	if(settings.callback && typeof settings.callback === 'function')
		this.callback = settings.callback;
	else
		console.error("Currency: callback is not a function");

	if(settings.icon && settings.icon!=="")
		this.icon=settings.icon

	return this;
}

Currency.prototype.increase = function(value) {
	this.value += value;
	this.callback(value);
	
	return this;
}

Currency.prototype.decrease = function(value) {
	this.value -= value;
	this.callback();

	return this;
}

Currency.prototype.isMax = function() {
	if(this.value===this.max)
		return true;
	else
		return false;
}

Currency.prototype.isMin = function() {
	if(this.value===this.min)
		return true;
	else
		return false;
}