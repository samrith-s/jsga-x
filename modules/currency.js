
var Currencies={};

Currencies.all = [];

Currencies.find = function(name) {
	for(var i=0,len=Currencies.all.length; i<len; i++)
		if(Currencies.all[i].name===name)
			return Currencies.all[i];
}



/*------- CURRENCY -------*/

function Currency(name, min, max, value, callback) {

	this.name = name;
	this.min = min;
	this.max = max;
	this.value = value;

	Currencies.all.push(this);

	if(callback && typeof callback === 'function')
		this.callback = callback;
	else if(!callback)
		this.callback = function() {};
	else
		console.error("Currency: callback is not a function");


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