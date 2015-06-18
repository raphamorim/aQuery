var helpers = {
    fadeIn: function fadeIn(el, time) {
        el.style.opacity = 0;
        var last = +new Date();
        var tick = function() {
            el.style.opacity = +el.style.opacity + (new Date() - last) / time;
            last = +new Date();

            if (+el.style.opacity < 1) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };

        tick();
    },

    fadeOut: function fadeOut(el, time) {
        el.style.opacity = 1;
        var last = +new Date();
        var tick = function() {
            el.style.opacity = +el.style.opacity - (new Date() - last) / time;
            last = +new Date();

            if (+el.style.opacity > 0) {
                (window.requestAnimationFrame && requestAnimationFrame(tick)) || setTimeout(tick, 16)
            }
        };
        tick();
    }
}

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