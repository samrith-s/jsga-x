
/*------- HUD -------*/

function HUD(name, screen, options) {

	var settings = $.extend({
		col: 4,
		row: 'auto',
		x: 7,
		y: 1
	}, options);

	this.name  = name.replace(/\s+/g, "");

	new Layer(this.name, screen, { col: settings.col, row: settings.row, x: settings.x, y: settings.y });

	for(var i=0, len=Currencies.all.length; i<len; i++) {
		new Component(Currencies.all[i].name + "text", screen[this.name], {
			type: 'div',
			classes: 'col-8 pos-r disp-ib',
			text: Currencies.all[i].val
		});

		if(Currencies.all[i].icon && Currencies.all[i].icon!=="")
			new Component(Currencies.all[i].name + "icon", screen[this.name], {
				type: 'img',
				classes: 'col-4 pos-r disp-ib',
				image: {
					path: Currencies.all[i].icon
				}
			});
	}
	return this;
}