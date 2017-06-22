# periodic-function [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/periodic-function.svg)](https://travis-ci.org/dfcreative/periodic-function)

Collection of periodic functions with period normalized to turns.

## Usage

[![npm install periodic-function](https://nodei.co/npm/periodic-function.png?mini=true)](https://npmjs.org/package/periodic-function/)

```js
const fn = require('periodic-function/<fn>')

//π radians
let halfTurn = fn(.5)

//2π radians
let fullTurn = fn(1)
```

## API

### let fn = require('periodic-function/\<fn\>')

The `fn` takes the amount of turn `t` as the first argument and optional parameters. The list of available functions:

| Signature | Waveform | Meaning |
---|:---:|---|
| <code>sine(t,&nbsp;phase=0)</code> | ![sine](https://raw.githubusercontent.com/dfcreative/periodic-function/master/sine.png) | `Math.sin` normalized to `0..1` rather than radians `0..2π`. To turn into cos, set `phase=.25`. |
| <code>triangle(t,&nbsp;ratio=0.5)</code> | ![triangle](https://raw.githubusercontent.com/dfcreative/periodic-function/master/triangle.png) | Triangular waveform with regulated ratio. To turn into sawtooth set `ratio=0` or `ratio=1`. |
| <code>sawtooth(t,&nbsp;inverse=false)</code> | ![sawtooth](https://raw.githubusercontent.com/dfcreative/periodic-function/master/sawtooth.png) | Edge case of triangular waveform, whether descending or ascending. |
| <code>square(t,&nbsp;ratio=0.5)</code> | ![square](https://raw.githubusercontent.com/dfcreative/periodic-function/master/square.png) | Rectangular waveform with regulated ratio. To turn into pulse set `ratio=0`. |
| <code>pulse(t,&nbsp;tlr=0)</code> | ![pulse](https://raw.githubusercontent.com/dfcreative/periodic-function/master/pulse.png) | Delta-pulse, which is `1` at `0` and `0` anywhere else. Pass `tlr` as a precision tolerance, ie. `1e-5`. |
| <code>fourier(t,&nbsp;real,&nbsp;imag?, normalize=false)</code> | ![fourier](https://raw.githubusercontent.com/dfcreative/periodic-function/master/fourier.png) | [Fourier Series](https://en.wikipedia.org/wiki/Fourier_series) coefficients, ie. harmonics. `0` harmonic is static level, `1`st is base frequency, `2`nd is double base frequency, `3`rd is triple etc. Set `normalize=true` to bring max harmonic to `1`. |
| <code>noise(t)</code> | ![noise](https://raw.githubusercontent.com/dfcreative/periodic-function/master/noise.png) | Repeated sample of noise. |
| <code>clausen(t,&nbsp;limit=10)</code> | ![clausen](https://raw.githubusercontent.com/dfcreative/periodic-function/master/clausen.png) | [Clausen function](https://en.wikipedia.org/wiki/Clausen_function). Pass `limit` to indicate number of iterations, precision/performance tradeoff. |

If you feel like it is not complete list of you know example of a good periodic function, suitable for dsp, welcome to [contribute](https://github.com/dfcreative/periodic-function/issues).

## Related

* [audio-oscillator](https://github.com/audiojs/audio-oscillator)
* [createPeriodicWave](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createPeriodicWave)
* [List of periodic functions](https://en.wikipedia.org/wiki/List_of_periodic_functions)

## Credits

© 2017 Dima Yv. MIT License
