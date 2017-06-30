'use strict'

module.exports = function sawtooth (t, inversed) {
	t%=1
	if (t < 0) t += 1
	if (inversed) return -1 + 2*t
	return 1 - 2*t
};
