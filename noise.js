'use strict'

var len = 5*44100
var samples = Array.from({length:len}, Math.random)

module.exports = function noise (t) {
	return samples[Math.floor(t*44100)%len]
};
