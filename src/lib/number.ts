/**
 * Multiplies a value by 2. (Also a full example of Typedoc's functionality.)
 *
 * ### Example (es module)
 * ```js
 * import { double } from 'sologenic-xrpl-js-util'
 * console.log(double(4))
 * // => 8
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var double = require('sologenic-xrpl-js-util').double;
 * console.log(double(4))
 * // => 8
 * ```
 *
 * @param value   Comment describing the `value` parameter.
 * @returns       Comment describing the return type.
 * @anotherNote   Some other value.
 */
export function double(value: number): number {
  return value * 2;
}

/**
 * Raise the value of the first parameter to the power of the second using the es7 `**` operator.
 *
 * ### Example (es module)
 * ```js
 * import { power } from 'sologenic-xrpl-js-util'
 * console.log(power(2,3))
 * // => 8
 * ```
 *
 * ### Example (commonjs)
 * ```js
 * var power = require('sologenic-xrpl-js-util').power;
 * console.log(power(2,3))
 * // => 8
 * ```
 */
export function power(base: number, exponent: number): number {
  // This is a proposed es7 operator, which should be transpiled by Typescript
  return base ** exponent;
}
