'use strict'

const t = require('tape')
const fn = require('./')
const almost = require('almost-equal')

function draw(fn, ...args) {
	let arr = populate(fn, 32, ...args)

	let canvas = document.body.appendChild(document.createElement('canvas'))
	let ctx = canvas.getContext('2d')
	canvas.width = arr.length
	canvas.height = 32
	let w = canvas.width * .75, h = canvas.height*.75

	ctx.beginPath()
	// ctx.moveTo(canvas.width*.125,canvas.height*.625)
	for (let i = 0, l = arr.length; i < l; i++) {
		// ctx.fillRect(w*i/l, h*.5, 1, -(arr[i]*.5)*h )
		ctx.lineTo(w*i/l + canvas.width*.125, canvas.height*.5-(arr[i]*.5)*h )
	}
	// ctx.lineTo(canvas.width*.875,canvas.height*.625)
	ctx.lineWidth = 2;
	ctx.stroke()
	ctx.closePath()
}

function populate(fn, N, ...args) {
	return Array.from({length: N}, (v, i) => fn(i/N, ...args))
}


t('sin', t => {
	draw(fn.sine)
	var sin = populate(fn.sine, 1024);
	t.equal(sin[0], 0);
	t.equal(sin[~~(1024/4)], 1);
	t.ok(almost(sin[~~(1024/2)], 0, 0.0001, 0.0001));
	t.end()
});

t('cos', t => {
	draw(fn.sine, .25)
	var cos = populate(fn.sine, 4, .25);
	t.equal(cos[0], 1);
	t.ok(almost(cos[1], 0, 0.0001, 0.0001));
	t.equal(cos[2], -1);
	t.ok(almost(cos[3], 0, 0.0001, 0.0001));
	t.end()
});

t('delta', t => {
	draw(fn.pulse)
	var delta = populate(fn.pulse, 4);
	t.equal(delta[0], 1);
	t.equal(delta[1], 0);
	t.equal(delta[2], 0);
	t.equal(delta[3], 0);
	t.end()
});

t('pulse', t => {
	var pulse = fn.pulse(10, 0);
	t.equal(pulse[0], 1);
	t.equal(pulse[1], -1);
	t.equal(pulse[9], -1);
	t.end()
});

t('square', t => {
	draw(fn.square)
	var square = fn.square(10);
	t.equal(square[0], 1);
	t.equal(square[4], 1);
	t.equal(square[5], -1);
	t.equal(square[9], -1);
	t.end()
});

t('triangle', t => {
	draw(fn.triangle)
	var triangle = fn.triangle(8);
	t.equal(triangle[0], 0);
	t.equal(triangle[1], 0.5);
	t.equal(triangle[2], 1);
	t.equal(triangle[3], 0.5);
	t.equal(triangle[4], 0);
	t.equal(triangle[6], -1);
	t.end()
});

t('saw', t => {
	draw(fn.sawtooth)
	var saw = populate(fn.sawtooth, 8);
	t.equal(saw[0], 1);
	t.equal(saw[7], -1);
	t.end()
});


t('fourier', t => {
	draw(fn.fourier, [0, 1, 0, .5], [0, .5, 0, .1], true)
	var saw = populate(fn.fourier, 8, [1, .5, .25, .125]);
	t.end()
});


t('noise', t => {

})