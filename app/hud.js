
/**
 * HUD class allows creation of new HUD 
 *
 * @class  HUD
 * 
 * @param {string} name - A unique name for the component
 * @param {object} target - A screen or layer object to add the component to
 * @param {array} currencies - An array of currency objects
 * @param {object} [options] A JSON object of options
 * @param {string} [options.col] The column (between 1-12) to specify the width of the HUD. Accepts 'auto', too
 * @param {string} [options.row] The row (1-12) to specify the height of the HUD. Accepts 'auto', too
 * @param {string} [options.x] The left position based on the grid (0 - 12).
 * @param {string} [options.y] The top position based on the grid (0 - 12).
 * @return {object} Current object after creating
 * @constructor
 * @example
 * 	var scrn = new Screen('myScreen');
 * 	var health = new Currency('health', 0, 100, 100);
 * 	var mana = new Currency('mana', 0, 100, 100);
 * 	var hud = new HUD('myHUD', scrn, [health, mana], {col: 12, row:'auto', x:0, y:0});
 */
function HUD(name, screen, currencies, options) {

	var settings = $.extend({
		col: 4,
		row: 'auto',
		x: 7,
		y: 1
	}, options);

	this.name  = name.replace(/\s+/g, "");

	new Layer(this.name, screen, { col: settings.col, row: settings.row, x: settings.x, y: settings.y });

	for(var i=0, len=currencies.length; i<len; i++) {
		new Component(currencies[i].name + "text", screen[this.name], {
			type: 'div',
			classes: 'col-8 pos-r disp-ib',
			text: currencies[i].val
		});

		if(currencies[i].icon && currencies[i].icon!=="")
			new Component(currencies[i].name + "icon", screen[this.name], {
				type: 'img',
				classes: 'col-4 pos-r disp-ib',
				image: {
					path: currencies[i].icon
				}
			});
	}

	return this;
}