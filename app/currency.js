
var Currencies={};

Currencies.all = [];

Currencies.find = function(name) {
	for(var i=0,len=Currencies.all.length; i<len; i++)
		if(Currencies.all[i].name===name)
			return Currencies.all[i];
}

/**
 * Currency class that allows creation of new currencies like health, coins etc and allows effective management. Part of the game logic element.
 * @class  Currency
 * @constructor
 * @param {string} name - A unique name for the currency
 * @param {int} min - Minimum value of currency
 * @param {int} max - Maximum value of currency
 * @param {int} value - Value to initialize currency with
 * @params {object} [options] - Pass a JSON object of options
 * @return {object} Current object after creating
 * @example
 * 	var health = new Currency('health', 0, 100, 100, {callback: myFunct(), icon:'../../myicon.png'});
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
 * Function to increase the currency by a certain value
 *
 * @method  increase
 * @param {int} value - Value to increase currency by
 * @chainable
 * @return {object} Current object after updating
 * @example
 * 	var health = new Currency('health', 0, 100. 0);
 * 	health.increase(10); //increases health from 0 -> 10
 */
Currency.prototype.increase = function(value) {
	this.value += value;
	this.callback(value);
	
	return this;
}

/**
 * Function to decrease the currency by a certain value
 *
 * @method  decrease
 * @param {int} value - Value to decrease currency by
 * @chainable
 * @return {object} Current object after updating
 * @example
 * 	var health = new Currency('health', 0, 100, 10);
 * 	health.decrease(10); //decrease health from 10->0
 */
Currency.prototype.decrease = function(value) {
	this.value -= value;
	this.callback();

	return this;
}

/**
 * Function to check if value of currency is equal to it's maximum value
 *
 * @method  isMax
 * @return {bool} Returns either true or false
 * @readOnly
 * @example
 * 	var health = new Currency('health', 0, 100, 10);
 * 	var isMx = health.isMax(); //will return true or false after checking
 */
Currency.prototype.isMax = function() {
	if(this.value===this.max)
		return true;
	else
		return false;
}

/**
 * Function to check if value of currency is equal to it's minimum value
 *
 * @method  isMin
 * @return {bool} Returns either true or false
 * @readOnly
 * @example
 * 	var health = new Currency('health', 0, 100, 10);
 * 	var isMn = health.isMin(); //will return true or false after checking
 */
Currency.prototype.isMin = function() {
	if(this.value===this.min)
		return true;
	else
		return false;
}

/**
 * Function to check if value of currency is equal to it's minimum value
 *
 * @method  val
 * @return {int} Returns the current value of the currency
 * @readOnly
 * @example
 * 	var health = new Currency('health', 0, 100, 10);
 * 	var isMn = health.val(); //will return the current value
 */
Currency.prototype.val = function() {
	return this.value;
}