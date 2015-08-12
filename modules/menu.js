
/*------- MENU -------*/
function Menu(name, screen, options) {
	this.name = name.replace(/\s+/g, "");;

	var settings = $.extend({
		labels: ["Start", "Instructions", "Options"],
		width: 80,
		height: -1
	}, options);

	var menu_ = document.createElement("menu");
	menu_.id = this.name;
	document.getElementById(screen.name).appendChild(menu_);

	for(var i=0,len=settings.labels.length; i<len; i++) {
		var itm = document.createElement("menu-item");
		var itmTxt = document.createTextNode(settings.labels[i]);
		itm.appendChild(itmTxt);
		itm.id = this.name + "-item-" + (i+1);
		document.getElementById(this.name).appendChild(itm);
		this["item"+(i+1)] = $('#'+itm.id);
	}

	return this;
}