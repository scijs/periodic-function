'use strict'

var len = 5*44100
var samples = Array.from({length:len}, function () {return Math.random()*2-1})

module.exports = function noise (t) {
	return samples[Math.floor(t*44100)%len]
};
