'use strict'

module.exports = function square (t, ratio) {
	if (ratio == null) ratio = 0.5
	if (t >= ratio) return -1;
	return 1;
};
