# periodic-function [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges) [![Build Status](https://img.shields.io/travis/dfcreative/periodic-function.svg)](https://travis-ci.org/dfcreative/periodic-function)

Collection of periodic functions with period in turns.

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

### let fn = require('periodic-function/<fn>')

The `fn` takes number of turns `τ` as the first argument and optional parameters. The list of available functions:

| Signature | Waveform | Meaning |
---|:---:|---|
| `sine(τ, phase=0)` | ![sine](https://raw.githubusercontent.com/dfcreative/periodic-function/master/sine.png) | `Math.sin` normalized to number of turns `0..1` rather than radians. To turn into cos, set `phase=.25`. |
| `triangle(τ, ratio=0.5)` | ![triangle](https://raw.githubusercontent.com/dfcreative/periodic-function/master/triangle.png) | Triangular waveform with regulated ratio. To turn into sawtooth set `ratio=0` or `ratio=1`. |
| `sawtooth(τ, inverse=false)` | ![sawtooth](https://raw.githubusercontent.com/dfcreative/periodic-function/master/sawtooth.png) | |
| `square(τ, ratio=0.5)` | ![square](https://raw.githubusercontent.com/dfcreative/periodic-function/master/square.png) | Rectangular waveform with regulated ratio. To turn into pulse set `ratio=0`. |
| `pulse(τ)` | ![pulse](https://raw.githubusercontent.com/dfcreative/periodic-function/master/pulse.png) | Delta-pulse, which is `1` at `0` and `0` anywhere else. |
| `fourier(τ, real, imag?, normalize?)` | ![fourier](https://raw.githubusercontent.com/dfcreative/periodic-function/master/fourier.png) | [Fourier Series](https://en.wikipedia.org/wiki/Fourier_series) coefficients, ie. harmonics. 0 harmonic is static level, 1st is base frequency, 2nd is double base frequency, 3rd is triple etc. |
| `noise(τ)` | ![noise](https://raw.githubusercontent.com/dfcreative/periodic-function/master/noise.png) | Repeated sample of noise. |

## Related

* [audio-oscillator](https://github.com/audiojs/audio-oscillator)
* [createPeriodicWave](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createPeriodicWave)
* [List of periodic functions](https://en.wikipedia.org/wiki/List_of_periodic_functions)

## Credits

© 2017 Dima Yv. MIT License
