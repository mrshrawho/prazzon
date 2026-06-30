# prazzon

A modern JavaScript utility library for everyday tasks.

## Features

- Array utilities (chunk, flatten, unique)
- String utilities (capitalize, truncate, slugify)
- Object utilities (deepClone, merge, pick)
- Date utilities (format, relative time)

## Installation

`ash
npm install prazzon
`

## Usage

`javascript
import { chunk, capitalize, deepClone } from 'prazzon';

// Array chunking
chunk([1, 2, 3, 4, 5], 2); // [[1, 2], [3, 4], [5]]

// String capitalization
capitalize('hello world'); // 'Hello World'

// Deep clone objects
const original = { a: { b: 1 } };
const cloned = deepClone(original);
`

## License

MIT