
var Util = {};

Util.shuffle = function(array){
    for(var j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
}

Util.random = function(min, max) {
	return Math.floor(Math.random()*(max-min+1)+min);
}

Util.randomElement = function(array) {
	return array[Math.floor(Math.random()*(array.length+1))];
}