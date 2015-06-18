window.$ = document.querySelectorAll.bind(document)

Node.prototype.on = window.on = function(name, fn) {
	this.addEventListener(name, fn)
}

NodeList.prototype.__proto__ = Array.prototype

NodeList.prototype.show = function(time, cb) {
	this.forEach(function(elem, i) {
		if (time) return helpers.fadeIn(elem, time)
		elem.style.display = ''
	}) 
	if (typeof(cb) === 'function') return cb(this);
}

NodeList.prototype.hide = function(time, cb) {
	this.forEach(function(elem, i) {
		if (time) return helpers.fadeOut(elem, time)
		elem.style.display = 'none'
	})
	if (typeof(cb) === 'function') return cb(this);
}

NodeList.prototype.toggle = function(className, cb) {
	this.forEach(function(elem, i) {
		elem.classList.toggle(className)
	})
	if (typeof(cb) === 'function') return cb(this);
}

NodeList.prototype.on = NodeList.prototype.addEventListener = function(name, fn) {
	this.forEach(function(elem, i) {
		elem.on(name, fn)
	})
}