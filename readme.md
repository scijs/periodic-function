# periodic-function [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges)

Collection of periodic functions with period in turns.

![periodic-function](https://github.com/dfcreative/periodic-function/blob/gh-pages/index.png?raw=true)

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

Require a function as `let fn = require('periodic-function/<fn>')` or the whole set as `let fn = require('periodic-function')`. The `fn` takes number of turns `τ` as the first argument and optional parameters.

| Function | Waveform | Meaning |
---|---|---|
| `sine(τ, phase=0)` | [!sine]() | `Math.sin` normalized to number of turns `0..1`. |
| `triangle(τ, ratio=0.5)` | [!triangle]() | |
| `sawtooth(τ, inverse=false)` | [!sawtooth]() | |
| `square(τ, ratio=0.5)` | [!square]() | |
| `pulse(τ)` | [!pulse]() | |
| `fourier(τ, real, imag?, normalize?)` | [!fourier]() | [Fourier Series](https://en.wikipedia.org/wiki/Fourier_series) coefficients.
| `noise(τ)` | [!noise]() | |

## Related

* [audio-oscillator](https://github.com/audiojs/audio-oscillator) − fill array/buffer with sampled oscillation
* [createPeriodicWave](https://developer.mozilla.org/en-US/docs/Web/API/AudioContext/createPeriodicWave)
* [List of periodic functions](https://en.wikipedia.org/wiki/List_of_periodic_functions)

## Credits

© 2017 Dima Yv. MIT License
