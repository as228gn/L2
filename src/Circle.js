/**
 * @file Module for the class Circle.
 * @module src/Circle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

import { Validate } from './Validate.js'

export class Circle {
  #diameter
  #radius

  set diameter(diameter) {
    const validate = new Validate()
    validate.validatePositiveNumber(diameter)
    this.#diameter = diameter
  }

  get diameter() {
    return this.#diameter
  }

  set radius(radius) {
    const validate = new Validate()
    validate.validatePositiveNumber(radius)
    this.#radius = radius
  }

  get radius() {
    return this.#radius
  }

  getCircumferenceWithRadius() {
    if (!this.#radius) {
      throw new TypeError('Function call must contain radius.')
    }
    return 2 * this.#radius * Math.PI
  }

  getCircumferenceWithDiameter() {
    if (!this.#diameter) {
      throw new TypeError('Function call must contain diameter.')
    }
    return this.#diameter * Math.PI
  }

  getArea() {
    if (!this.#radius) {
      throw new TypeError('Function call must contain radius.')
    }
    return Math.PI * Math.pow(this.#radius, 2)
  }

  increaseOrDecreaseByPercent(percent) {
    if (!this.#radius) {
      throw new TypeError('Function call must contain radius.')
    }
    
    const p = (100 + percent)/100
    const a = Math.sqrt(p)

    this.#radius = a * this.#radius
  }

}