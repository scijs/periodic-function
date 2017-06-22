'use strict'

var τ = Math.PI * 2
module.exports = function noise (t, limit) {
	if (limit == null) limit = 10

	t %= 1

	var result = 0
	for (var k = 1; k <= limit; k++) {
		result += Math.sin(k*τ*t) / (k*k)
	}

	return result
};
