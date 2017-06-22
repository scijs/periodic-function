'use strict'

module.exports = function pulse (t, tlr) {
	t%=1
	if (tlr == null) tlr = 0
	if (t <= tlr) return 1
	return 0
};
