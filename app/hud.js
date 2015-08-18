
/*------- HUD -------*/
/**
 * @class
 * 
 *	HUD class that allows creation of HUDs with currencies
 * 
 * @param {string} name - A unique name for the HUD
 * @param {object} screen - Screen or layer element to place the HUD
 * @param {array} curriences - Array of currencies to display the HUD
 * @param {optionsHash} options
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