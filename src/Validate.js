/**
 * @file Module for the class Validate.
 * @module src/Validate
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

export class Validate {

  constructor() { }

  validatePositiveNumber(number) {
    if (number < 1 || typeof number === 'string') {
      throw new TypeError('Parameter must be a positive number.')
    }
  }
}