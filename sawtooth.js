'use strict'

module.exports = function sawtooth (t, inversed) {
	if (inversed) return -1 + 2*t
	return 1 - 2*t
};
