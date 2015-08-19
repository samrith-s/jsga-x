
/** 
 * Menu class that allows creation of new Menu with icons
 * 
 * @class  Menu
 * @param {string} name - A unique name for the Menu
 * @param {object} screen - Name of the screen
 * @param {object} options - Pass a JSON object of options
 * @property {object} options options for this lalala
 * @constructor
 * @return {object} Current object after creating
 * @example
 * 	var scrn = new Screen('myScreen');
 * 	var mnu = new Menu('mainMenu', scrn, {col: 8, row: 'auto', x:2, y:2});
 */
function Menu(name, screen, options) {
	this.name = name.replace(/\s+/g, "");

	var settings = $.extend({
		dispay: "vertical",
		col: 8,
		row: 'auto',
		x: 2,
		y: 2,
		labels: ["Start", "Instructions", "Options"],

	}, options);

	new Layer(this.name, screen, { col: settings.col, row: settings.row, x: settings.x, y: settings.y});

	for(var i=0,len=settings.labels.length; i<len; i++) {
		new Component(this.name + "Item" + (i+1), screen[this.name], {
			type: "ga-menu-item",
			classes: 'col-12',
			text: settings.labels[i]
		});
	}

	this.$ = $('#' + this.name);
	
	return this;
}