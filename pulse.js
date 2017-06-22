'use strict'

module.exports = function pulse (t, rate) {
	let step = rate ? 1/rate : 1e-2
	if (t <= step) return 1;
	return 0;
};
