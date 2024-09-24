/**
 * @file Module for the class RightAngledTriangle.
 * @module src/RightAngledTriangle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

import { Validate } from './Validate.js'

export class RightAngledTriangle {
  #hypotenuse
  #adjacentSide
  #oppositeSide
  #adjacentAngle
  #oppositeAngle
  #angle = 90

  set hypotenuse(hypotenuse) {
    const validate = new Validate()
    validate.validatePositiveNumber(hypotenuse)
    this.#hypotenuse = hypotenuse
  }

  get hypotenuse() {
    return this.#hypotenuse
  }

  set adjacentSide(adjacentSide) {
    const validate = new Validate()
    validate.validatePositiveNumber(adjacentSide)
    this.#adjacentSide = adjacentSide
  }

  get adjacentSide() {
    return this.#adjacentSide
  }

  set oppositeSide(oppositeSide) {
    const validate = new Validate()
    validate.validatePositiveNumber(oppositeSide)
    this.#oppositeSide = oppositeSide
  }

  get oppositeSide() {
    return this.#oppositeSide
  }

  set adjacentAngle(adjacentAngle) {
    const validate = new Validate()
    validate.validatePositiveNumber(adjacentAngle)
    this.#adjacentAngle = adjacentAngle
  }

  get adjacentAngle() {
    return this.#adjacentAngle
  }

  set oppositeAngle(oppositeAngle) {
    const validate = new Validate()
    validate.validatePositiveNumber(oppositeAngle)
    this.#oppositeAngle = oppositeAngle
  }

  get oppositeAngle() {
    return this.#oppositeAngle
  }

  get angle() {
    return this.#angle
  }

  /**
   * Returns the area.
   *
   * @throws {TypeError} an error if the properties needed isn´t there.
   * @returns { number } the area of the rightAngledTriangle.
   */
  getAreaWithThreeSides() {
    if (!this.#hypotenuse || !this.#adjacentSide || !this.#oppositeSide) {
      throw new TypeError('Function call must contain hypotenuse, adjacentside and oppositeside.')
    }
    const halfPerimeter = (this.#hypotenuse + this.#adjacentSide + this.#oppositeSide) / 2

    return Math.sqrt(halfPerimeter * (halfPerimeter - this.#hypotenuse) * (halfPerimeter - this.#adjacentSide) * (halfPerimeter - this.#oppositeSide))
  }

  /**
   * Returns the perimeter.
   *
   * @throws {TypeError} an error if the properties needed isn´t there.
   * @returns { number } the perimeter of the rightAngledTriangle.
   */
  getPerimeter() {
    if (!this.#hypotenuse || !this.#adjacentSide || !this.#oppositeSide) {
      throw new TypeError('Function call must contain hypotenuse, adjacentside and oppositeside.')
    }
    return this.#hypotenuse + this.#adjacentSide + this.#oppositeSide
  }

  /**
   * Returns the hypotenuse.
   *
   * @throws {TypeError} an error if the properties needed isn´t there.
   * @returns { number } the hypotenuse of the rightAngledTriangle.
   */
  getHypotenuse() {
    if (!this.#adjacentSide || !this.#oppositeSide) {
      throw new TypeError('Function call must contain adjacentside and oppositeside.')
    }
    return Math.sqrt(Math.pow(this.#adjacentSide, 2) + Math.pow(this.#oppositeSide, 2))
  }

  /**
   * Returns the oppositeside.
   *
   * @throws {TypeError} an error if the properties needed isn´t there.
   * @returns { number } the oppositeside of the rightAngledTriangle.
   */
  getOppositeSideWithAdjacentSideAndHypotenuse() {
    if (!this.#adjacentSide || !this.#hypotenuse) {
      throw new TypeError('Function call must contain adjacentside and hypotenuse.')
    }
    return Math.sqrt(Math.pow(this.#hypotenuse, 2) - Math.pow(this.#adjacentSide, 2))
  }

  /**
   * Returns the adjacentside.
   *
   * @throws {TypeError} an error if the properties needed isn´t there.
   * @returns { number } the adjacentside of the rightAngledTriangle.
   */
  getAdjacentSideWithOppositeSideAndHypotenuse() {
    if (!this.#oppositeSide || !this.#hypotenuse) {
      throw new TypeError('Function call must contain adjacentside and oppositeside.')
    }
    return Math.sqrt(Math.pow(this.#hypotenuse, 2) - Math.pow(this.#oppositeSide, 2))
  }

  /**
   * Returns the opposite angle.
   *
   * @throws {TypeError} an error if the properties needed isn´t there.
   * @returns { number } the opposite angle of the rightAngledTriangle.
   */
  getOppositeAngleWithAdjacentAngle() {
    if (!this.#adjacentAngle) {
      throw new TypeError('Function call must contain adjacentangle.')
    }
    return 180 - (this.#adjacentAngle + this.#angle)
  }

  /**
   * Returns the adjacent angle.
   *
   * @throws {TypeError} an error if the properties needed isn´t there.
   * @returns { number } the adjacent angle of the rightAngledTriangle.
   */
  getAdjacentAngleWithOppositeAngle() {
    if (!this.#oppositeAngle) {
      throw new TypeError('Function call must contain oppositeangle.')
    }
    return 180 - (this.#oppositeAngle + this.#angle)
  }

  getAdjacentSideWithAdjacentAngleAndHypotenuse() {
    if (!this.#hypotenuse || !this.#adjacentAngle) {
      throw new TypeError('Function call must contain hypotenuse and adjacentangle.')
    }
    const radians = this.#adjacentAngle * (Math.PI / 180)
    const adjacentSide = this.#hypotenuse * Math.cos(radians)
    return adjacentSide
  }

  getHypotenuseWithAdjacentAngleAndSide() {
    if (!this.#adjacentSide || !this.#adjacentAngle) {
      throw new TypeError('Function call must contain adjacentside and adjacentangle.')
    }
    const radians = this.#adjacentAngle * (Math.PI / 180)
    const hypotenuse = this.#adjacentSide / Math.cos(radians)
    return hypotenuse
  }

  getAdjacentAngleWithAdjacentSideAndHypotenus() {
    if (!this.#hypotenuse || !this.#adjacentSide) {
      throw new TypeError('Function call must contain hypotenuse and adjacentside.')
    }
    const a = this.#adjacentSide / this.#hypotenuse
    let radiusAngle = Math.acos(a)
    const adjacentAngle = radiusAngle * (180 / Math.PI)
    return adjacentAngle
  }

  getOppositeAngleWithOppositeSideAndHypotenuse() {
    if (!this.#hypotenuse || !this.#oppositeSide) {
      throw new TypeError('Function call must contain hypotenuse and oppositeside.')
    }
    const a = this.#oppositeSide / this.#hypotenuse
    let radiusAngle = Math.asin(a)
    const oppositeAngle = radiusAngle * (180 / Math.PI)
    return oppositeAngle
  }

  increaseOrDecreaseByPercent(percent) {
    if (!this.#hypotenuse || !this.#adjacentSide || !this.#oppositeSide) {
      throw new TypeError('Function call must contain hypotenuse, adjacentside and oppositeside.')
    }
    
    const p = (100 + percent)/100
    const a = Math.sqrt(p)

    this.#hypotenuse = a * this.#hypotenuse
    this.#adjacentSide = a * this.#adjacentSide
    this.#oppositeSide = a * this.#oppositeSide
  }
}