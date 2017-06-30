'use strict'

var len = 5*44100
var samples = Array.from({length:len}, function () {return Math.random()*2-1})

module.exports = function noise (t) {
	t%=1
	if (t < 0) t += 1
	return samples[Math.floor(t*44100)%len]
};
