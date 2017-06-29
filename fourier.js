'use strict'

var τ = Math.PI*2
module.exports = function fourier (t, real, imag, normalize) {
	var res = 0;
	var N = real.length;
	var sumReal = 0, sumImag = 0;

	t %= 1

	if (imag === true) {
		normalize = imag
		imag = null
	}
	if (real) {
		for (var harmonic = 0; harmonic < N; harmonic++) {
			res += real[harmonic] * Math.cos(τ * t * harmonic)
			sumReal += real[harmonic];
		}
	}

	if (imag) {
		for (var harmonic = 0; harmonic < N; harmonic++) {
			res += imag[harmonic] * Math.sin(τ * t * harmonic);
			sumImag += imag[harmonic];
		}
	}

	return normalize ? res / (sumReal + sumImag) : res;
};
