/**
 * @file Module for the class Rektangle.
 * @module src/Rektangle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

import { Validate } from './Validate.js'

export class Rektangle {
  #length
  #width

  set length(length) {
    const validate = new Validate()
    validate.validatePositiveNumber(length)
    this.#length = length
  }

  get length() {
    return this.#length
  }

  set width(width) {
    const validate = new Validate()
    validate.validatePositiveNumber(width)
    this.#width = width
  }

  get width() {
    return this.#width
  }

  getPerimeter() {
    if (!this.#length || !this.#width) {
      throw new TypeError('Function call must contain length and width.')
    }
    return 2 * (this.#length + this.#width)
  }

  getArea() {
    if (!this.#length || !this.#width) {
      throw new TypeError('Function call must contain length and width.')
    }
    return this.#length * this.#width
  }

  increaseOrDecreaseByPercent(percent) {
    if (!this.#length || !this.#width) {
      throw new TypeError('Function call must contain length and width.')
    }
    
    const p = (100 + percent)/100
    const a = Math.sqrt(p)

    this.#length = a * this.#length
    this.#width = a * this.#width
  }
}