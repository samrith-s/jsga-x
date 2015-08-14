
/*------- MENU -------*/
function Menu(name, screen, options) {
	this.name = name.replace(/\s+/g, "");;

	var settings = $.extend({
		dispay: "vertical",
		col: 8,
		row: 'auto',
		labels: ["Start", "Instructions", "Options"],

	}, options);

	new Layer(this.name, screen, { col: settings.col, row: settings.row});

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