
/**
 * Utility module that provides useful functions.
 * @class Util
 */

var Util = {};


/**
 * Array shuffling function
 *
 * @method shuffle
 * @param {array} array - Any array object
 * @returns {array} Shuffled array
 * @example
 * 	var arr = [1,2,3,4,5];
 * 	arr = Util.shuffle(arr); //returns shuffled array
 */
Util.shuffle = function(array){
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}

/**
 * Random number generator after accepting a lower and an upper limit.
 *
 * @method randomNumber
 * @param {int} min - Lower limit
 * @param {int} max - Upper limit
 * @returns {int} A random number between the lower and upper limits
 * @example
 * 	var randNum = Util.randomNumber(2,5); //returns random number between 2 and 5
 */
Util.randomNumber = function(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * Pass an array and get a random element.
 *
 * @method randomElement
 * @param {array} array - Any array object
 * @returns {element} A random element from the array
 * @example
 * 	var arr = [1,2,3,4,5];
 * 	var randElem = Util.randomElement(arr); //returns random element like array[i]
 */
Util.randomElement = function(array) {
	return array[Math.floor(Math.random()*(array.length+1))];
}