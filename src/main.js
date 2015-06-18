window.$ = document.querySelectorAll.bind(document)

Node.prototype.on = window.on = function(name, fn) {
	this.addEventListener(name, fn)
}

NodeList.prototype.__proto__ = Array.prototype

NodeList.prototype.show = function(time, fn) {
	this.forEach(function(elem, i) {
		if (time) return helpers.fadeIn(elem, time)
		elem.style.display = ''
	})
}

NodeList.prototype.hide = function(time, fn) {
	this.forEach(function(elem, i) {
		if (time) return helpers.fadeOut(elem, time)
		elem.style.display = 'none'
	})
}

NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn) {
	this.forEach(function(elem, i) {
		elem.on(name, fn)
	})
}