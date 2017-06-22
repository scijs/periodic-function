'use strict'

module.exports = function triangle(t) {
	if (t > 0.5) t = 1 - t;
	return 1 - 4 * t;
};
