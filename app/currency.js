/**
 * @typedef optionsHash
 * @type {object}
 * @property {function} callback A custom callback function callable at any point
 * @property {string} icon The icon for the currency - generally a string path of image
 */

var Currencies={};

Currencies.all = [];

Currencies.find = function(name) {
	for(var i=0,len=Currencies.all.length; i<len; i++)
		if(Currencies.all[i].name===name)
			return Currencies.all[i];
}

/**
 * @class
 * 
 *	Currency class that allows creation of new currencies like health, coins etc and allows effective management. Part of the game logic element.
 * 
 * @param {string} name - A unique name for the currency
 * @param {int} min - Minimum value of currency
 * @param {int} max - Maximum value of currency
 * @param {int} value - Value to initialize currency with
 * @param {optionsHash} options
 */
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

/**
	increase(value) -  Function to increase the currency by a certain value

	Parameters:
	value - Value to increase the currency by

	Returns:
	The current object after increasing value
*/

Currency.prototype.increase = function(value) {
	this.value += value;
	this.callback(value);
	
	return this;
}

/**
	decrease(value) - Function to decrease the currency by a certain value

	Parameters:
	value - Value to decrease the currency by

	Returns:
	The currenct object after decreasing value
*/

Currency.prototype.decrease = function(value) {
	this.value -= value;
	this.callback();

	return this;
}

/**
	isMax() - Function to check if currency is at it's maximum

	Returns:
	True or false
*/

Currency.prototype.isMax = function() {
	if(this.value===this.max)
		return true;
	else
		return false;
}

/**
	isMin() - Function to check if currency is at it's minimum

	Returns:
	True or false
*/

Currency.prototype.isMin = function() {
	if(this.value===this.min)
		return true;
	else
		return false;
}