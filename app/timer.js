
/*------- TIMER -------*/
/**
 * @class
 * 
 *	Timer class that allows creation of new Timer 
 * 
 * @param {string} name - A unique name for the HUD
 * @param {int} duration - Max value of the timer
 * @param {bool} countdown - Set if timer is countdown
 */

function Timer(name, duration, countdown) {

	if(duration===0 && countdown)
		console.error("Zero timers cannot be countdown timers");
	else {
		this.name = name.replace(/\s+/g, "");
		this.duration = duration;
		this.countdown = countdown;
	
		if(this.countdown)
			this.value = parseInt(this.duration);
		else
			this.value = 0;

		console.log(this.value);
	
		return this;
	}
}
/**
 * @function
 * 
 *	Function to start the timer
 * 
 */

Timer.prototype.start = function() {
	var $this = this;

	var $do;


	if(this.countdown)
		$do = function() { $this.value-=1; }
	else
		$do = function() { $this.value+=1; }

	this.start = setInterval(function() {
		$do();

		if($this.value%$this.periodicInterval===0)
			$this.onChangeFunct();

		document.getElementById($this.textBox).innerHTML = $this.value;

		if((!$this.countdown && $this.value===$this.duration) || ($this.countdown && $this.value===0))
			$this.stop();

	}, 1000);

	return this;
}

/**
 * @function
 * 
 *	Function to stop the timer
 * 
 */
Timer.prototype.stop = function() {
	clearInterval(this.start);
	this.onEnd();
	return this;
}

/**
 * @function
 * 
 *	Function to return current value of timer
 * 
 */

Timer.prototype.val = function() {
	return this.value;
}

/**
 * @function
 * 
 *	Function to callback the function on end of the timer
 *
 * @param {function} callback - Name of function to call
 */

Timer.prototype.onEnd = function(callback) {
	if(!callback)
		this.onEnd = function() {};
	else
		this.onEnd = callback;

	return this;
}

/**
 * @function
 * 
 *	Function to callback the function on given interval on change of the timer
 *
 * @param {int} interval - Timer interval on change
 * @param {function} callback - Name of function to call
 */

Timer.prototype.onChange = function(interval, callback) {

	if(!callback)
		callback = function() {};
	
	this.periodicInterval = interval;
	this.onChangeFunct = callback;

	return this;
}
/**
 * @function
 * 
 *	Function to diaplay the timer
 *
 * @param {object} target - Target timer object to display
 * @param {optionsHash} options
 */
Timer.prototype.display = function(target, options) {

	var settings = $.extend({
		showIcon: false,
		iconPath: "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-11/256/Arrows-icon.png",
		col: 3,
		row: 'auto',
		x: 8,
		y: 0
	}, options);

	new Layer(this.name, target, {col:settings.col, row: settings.row, x: settings.x, y: settings.y});

	new Component(this.name+"Text", target[this.name], {
		type: 'span',
		classes: 'col-8',
		text: this.value
	});

	
	if(settings.showIcon)
		new Component(this.name+"Icon", target[this.name], {
			type: 'img',
			classes: 'col-4',
			image: {
				path: settings.iconPath
			}
		});

	this.textBox = this.name+"Text";

	return this;
}