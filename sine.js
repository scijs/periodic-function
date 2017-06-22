'use strict'

var τ = Math.PI * 2
module.exports = function sine (t, phase) {
	t%=1
	if (!phase) phase = 0
	return Math.sin(τ * (t + phase));
};
