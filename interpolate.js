'use strict'

module.exports = function interpolate(t, samples) {
	t%=1

	var ptr = t*samples.length
	var left = Math.floor(ptr)
	var right = Math.ceil(ptr)
	if (left === right) right++
	right %= samples.length
	var ratio = ptr - left

	return samples[left] * ratio + samples[right] * (1 - ratio)
}
