/**
 * @file Module for the class Validate.
 * @module src/Validate
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

export class Validate {

  /**
   * Validate the value as a positive number.
   *
   * @throws {Error} Throws an error if the value is not a positive number.
   * @param { number } value The value to validate as a positive number.
   */
  validatePositiveNumber(value) {
    if (value < 1 || typeof value === 'string') {
      throw new Error('Parameter must be a positive number.')
    }
  }
}