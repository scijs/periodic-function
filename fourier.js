'use strict'

var τ = Math.PI*2
module.exports = function fourier (t, real, imag, normalize) {
	var res = 0;
	var sumReal = 0, sumImag = 0;

	t %= 1

	if (imag === true) {
		normalize = imag
		imag = null
	}
	var N
	if (real) {
		N = real.length
		for (var harmonic = 0; harmonic < N; harmonic++) {
			res += real[harmonic] * Math.cos(τ * t * harmonic)
			sumReal += real[harmonic];
		}
	}

	if (imag) {
		N = imag.length
		for (var harmonic = 0; harmonic < N; harmonic++) {
			res += imag[harmonic] * Math.sin(τ * t * harmonic);
			sumImag += imag[harmonic];
		}
	}

	return normalize ? res / (sumReal + sumImag) : res;
};
