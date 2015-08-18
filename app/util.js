
var Util = {};		//Array of all created Util


/**
 * @function
 * 
 *	Function to shuffle the array
 *
 * @param {array} array - Name of the array
 */

Util.shuffle = function(array){
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}

/**
 * @function
 * 
 *	Function to randomize the number in min and max limit
 *
 * @param {int} min - Min value
 * @param {int} max - Max value
 */

Util.random = function(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

/**
 * @function
 * 
 *	Function to select the random element
 *
 * @param {array} array - Name of the array
 */


Util.randomElement = function(array) {
	return array[Math.floor(Math.random()*(array.length+1))];
}