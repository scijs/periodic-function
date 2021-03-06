'use strict'

module.exports = function triangle(t, ratio) {
	t%=1
	if (t < 0) t += 1

	if (ratio == 0.5 || ratio == null) {
		if (t > 0.5) t = 1 - t;
		return 1 - 4 * t;
	}

	if (ratio == 1) {
		return 1 - 2*t
	}

	if (ratio == 0) {
		return -1 + 2*t
	}

	if (t < ratio) {
		return 1 - 2*t/ratio
	}
	else {
		return -1 + 2*(t-ratio)/(1-ratio)
	}
};
