'use strict'

module.exports = function square (t, ratio) {
	t%=1
	if (t < 0) t += 1
	if (ratio == null) ratio = 0.5
	if (t >= ratio) return -1;
	return 1;
};
