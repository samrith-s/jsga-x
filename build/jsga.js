function Currency(a, b, c, d, e) {
    var f = $.extend({
        callback: function () {},
        icon: ""
    }, e);
    return this.name = a, this.min = b, this.max = c, this.val = d, Currencies.all.push(this), f.callback && "function" == typeof f.callback ? this.callback = f.callback : console.error("Currency: callback is not a function"), f.icon && "" !== f.icon && (this.icon = f.icon), this
}

function Screen(a) {
    this.name = a.replace(/\s+/g, "");
    var b = document.createElement("ga-screen");
    return b.id = this.name, document.getElementsByTagName("ga-jsga")[0].appendChild(b), this.$ = $("#" + this.name), this.DOM = document.getElementById(this.name), $Screens.all.push(this), this
}

function Layer(a, b, c) {
    var d = $.extend({
        col: 12,
        row: "auto",
        x: 0,
        y: 0
    }, c);
    this.name = a.replace(/\s+/g, "");
    var e = document.createElement("ga-layer");
    return e.id = this.name, e.className = "col-" + d.col + " row-" + d.row + " x-" + d.x + " y-" + d.y, document.getElementById(b.name).appendChild(e), b[this.name] = this, this.$ = $("#" + this.name), this.DOM = document.getElementById(this.name), $Layers.all.push(this), this
}

function Component(a, b, c) {
    var d = $.extend({
        type: "div",
        classes: "",
        text: "",
        image: {
            path: "",
            alt: "",
            title: ""
        }
    }, c);
    this.name = a.replace(/\s+/g, "");
    var e = document.createElement(d.type);
    if (e.id = this.name, e.className = "ga-component " + d.classes, "" !== d.text || null !== d.text) {
        var f = document.createTextNode(d.text);
        e.appendChild(f)
    }
    return "img" === d.type && (e.src = d.image.path, e.alt = d.image.alt, e.title = d.image.title), document.getElementById(b.name).appendChild(e), b[this.name] = this, this.$ = $("#" + this.name), this.DOM = document.getElementById(this.name), $Components.all.push(this), this
}

function HUD(a, b, c, d) {
    var e = $.extend({
        col: 4,
        row: "auto",
        x: 7,
        y: 1
    }, d);
    this.name = a.replace(/\s+/g, ""), new Layer(this.name, b, {
        col: e.col,
        row: e.row,
        x: e.x,
        y: e.y
    });
    for (var f = 0, g = c.length; g > f; f++) new Component(c[f].name + "text", b[this.name], {
        type: "div",
        classes: "col-8 pos-r disp-ib",
        text: c[f].val
    }), c[f].icon && "" !== c[f].icon && new Component(c[f].name + "icon", b[this.name], {
        type: "img",
        classes: "col-4 pos-r disp-ib",
        image: {
            path: c[f].icon
        }
    });
    return this
}

function Menu(a, b, c) {
    this.name = a.replace(/\s+/g, "");
    var d = $.extend({
        dispay: "vertical",
        col: 8,
        row: "auto",
        x: 2,
        y: 2,
        labels: ["Start", "Instructions", "Options"]
    }, c);
    new Layer(this.name, b, {
        col: d.col,
        row: d.row,
        x: d.x,
        y: d.y
    });
    for (var e = 0, f = d.labels.length; f > e; e++) new Component(this.name + "Item" + (e + 1), b[this.name], {
        type: "ga-menu-item",
        classes: "col-12",
        text: d.labels[e]
    });
    return this.$ = $("#" + this.name), this
}

function Timer(a, b, c) {
    return 0 === b && c ? void console.error("Zero timers cannot be countdown timers") : (this.name = a.replace(/\s+/g, ""), this.duration = b, this.countdown = c, this.countdown ? this.value = parseInt(this.duration) : this.value = 0, console.log(this.value), this)
}
var Currencies = {};
Currencies.all = [], Currencies.find = function (a) {
    for (var b = 0, c = Currencies.all.length; c > b; b++)
        if (Currencies.all[b].name === a) return Currencies.all[b]
}, Currency.prototype.increase = function (a) {
    return this.value += a, this.callback(a), this
}, Currency.prototype.decrease = function (a) {
    return this.value -= a, this.callback(), this
}, Currency.prototype.isMax = function () {
    return this.value === this.max ? !0 : !1
}, Currency.prototype.isMin = function () {
    return this.value === this.min ? !0 : !1
}, Currency.prototype.val = function () {
    return this.value
};
var $Screens = {};
$Screens.all = [], $Screens.find = function (a) {
    for (var b = 0, c = $Screens.all.length; c > b; b++)
        if ($Screens.all[b].name === a) return $Screens.all[b]
};
var $Layers = {};
$Layers.all = [], $Layers.find = function (a) {
    for (var b = 0, c = $Layers.all.length; c > b; b++)
        if ($Layers.all[b].name === a) return $Layers.all[b]
}, Layer.prototype.changeParent = function (a, b) {
    return document.getElementById(b.name).appendChild(document.getElementById(this.name)), b[this.name] = this, delete a[this.name], this
};
var $Components = {};
$Components.all = [], $Components.find = function (a) {
    for (var b = 0, c = $Components.all.length; c > b; b++)
        if ($Components.all[b].name === a) return $Components.all[b]
}, Component.prototype.changeParent = function (a, b) {
    return document.getElementById(b.name).appendChild(document.getElementById(this.name)), b[this.name] = this, delete a[this.name], this
}, Timer.prototype.start = function () {
    var a, b = this;
    return a = this.countdown ? function () {
        b.value -= 1
    } : function () {
        b.value += 1
    }, this.start = setInterval(function () {
        a(), b.value % b.periodicInterval === 0 && b.onChangeFunct(), document.getElementById(b.textBox).innerHTML = b.value, (!b.countdown && b.value === b.duration || b.countdown && 0 === b.value) && b.stop()
    }, 1e3), this
}, Timer.prototype.stop = function () {
    return clearInterval(this.start), this.onEnd(), this
}, Timer.prototype.val = function () {
    return this.value
}, Timer.prototype.onEnd = function (a) {
    return a ? this.onEnd = a : this.onEnd = function () {}, this
}, Timer.prototype.onChange = function (a, b) {
    return b || (b = function () {}), this.periodicInterval = a, this.onChangeFunct = b, this
}, Timer.prototype.display = function (a, b) {
    var c = $.extend({
        showIcon: !1,
        iconPath: "http://icons.iconarchive.com/icons/custom-icon-design/flatastic-11/256/Arrows-icon.png",
        col: 3,
        row: "auto",
        x: 8,
        y: 0
    }, b);
    return new Layer(this.name, a, {
        col: c.col,
        row: c.row,
        x: c.x,
        y: c.y
    }), new Component(this.name + "Text", a[this.name], {
        type: "span",
        classes: "col-8",
        text: this.value
    }), c.showIcon && new Component(this.name + "Icon", a[this.name], {
        type: "img",
        classes: "col-4",
        image: {
            path: c.iconPath
        }
    }), this.textBox = this.name + "Text", this
};
var Util = {};
Util.shuffle = function (a) {
    for (var b, c, d = a.length; d; b = Math.floor(Math.random() * d), c = a[--d], a[d] = a[b], a[b] = c);
    return a
}, Util.randomNumber = function (a, b) {
    return Math.floor(Math.random() * (b - a + 1) + a)
}, Util.randomElement = function (a) {
    return a[Math.floor(Math.random() * (a.length + 1))]
};
