
/** 
 * Menu class that allows creation of new Menu with icons
 * 
 * @class  Menu
 * @param {string} name - A unique name for the Menu
 * @param {object} screen - Name of the screen
 * @param {object} options - Pass a JSON object of options
 * @param {string} [options.col] The column (between 1-12) to specify the width of the HUD. Accepts 'auto', too
 * @param {string} [options.row] The row (1-12) to specify the height of the HUD. Accepts 'auto', too
 * @param {string} [options.x] The left position based on the grid (0 - 12).
 * @param {string} [options.y] The top position based on the grid (0 - 12).
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