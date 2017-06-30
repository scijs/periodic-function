'use strict'

module.exports = function step (t, samples) {
	t%=1
	if (t < 0) t += 1

	return samples[Math.floor(t*samples.length)]
}
