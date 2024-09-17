/**
 * @file Module for the class Triangle.
 * @module src/Triangle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

import { Validate } from './Validate.js'

export class Triangle {
  #hypotenuse
  #adjacentSide
  #oppositeSide
  #adjacentAngle
  #oppositeAngle
  #angle = 90
 

  constructor() {
  }

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

  getAreaWithThreeSides() {
    if (!this.#hypotenuse || !this.#adjacentSide || !this.#oppositeSide) {
      throw new TypeError('Function call must contain hypotenuse, adjacentside and oppositeside.')
    }
    const halfPerimeter = (this.#hypotenuse + this.#adjacentSide + this.#oppositeSide) / 2

    return Math.sqrt(halfPerimeter * (halfPerimeter - this.#hypotenuse) * (halfPerimeter - this.#adjacentSide) * (halfPerimeter - this.#oppositeSide))
  }

  getPerimeter() {
    if (!this.#hypotenuse || !this.#adjacentSide || !this.#oppositeSide) {
      throw new TypeError('Function call must contain hypotenuse, adjacentside and oppositeside.')
    }
    return this.#hypotenuse + this.#adjacentSide + this.#oppositeSide
  }

  getRemainingAngle() {
    if (this.#adjacentAngle) {
      return 180 - (this.#adjacentAngle + this.#angle)
    } else {
      return 180 - (this.#oppositeAngle + this.#angle)
    }
  }

  getHypotenuse() {
    if (!this.#adjacentSide || !this.#oppositeSide) {
      throw new TypeError('Function call must contain adjacentside and oppositeside.')
    }
    return Math.sqrt(Math.pow(this.#adjacentSide, 2) + Math.pow(this.#oppositeSide, 2))
  }

  getLeg() {
    if (this.#adjacentSide) {
      return Math.sqrt(Math.pow(this.#hypotenuse, 2) - Math.pow(this.#adjacentSide, 2))
    } else {
      return Math.sqrt(Math.pow(this.#hypotenuse, 2) - Math.pow(this.#oppositeSide, 2))
    }
  }

  getAdjacentLegWithAdjacentAngleAndHypotenuse() {
    if (!this.#hypotenuse || !this.#adjacentAngle) {
      throw new TypeError('Function call must contain hypotenuse and adjacentangle.')
    }
    const radians = this.#adjacentAngle * (Math.PI / 180)
    const adjacentSide = this.#hypotenuse * Math.cos(radians)
    return adjacentSide
  }

  getOppositeLegWithOppositeAngleAndHypotenuse() {
    if (!this.#hypotenuse || !this.#oppositeAngle) {
      throw new TypeError('Function call must contain hypotenuse and oppositeangle.')
    }
    const radians = this.#oppositeAngle * (Math.PI / 180)
    const oppositeSide = this.#hypotenuse * Math.sin(radians)
    return oppositeSide
  }

  getHypotenuseWithAdjacentAngleAndSide() {
    if (!this.#adjacentSide || !this.#adjacentAngle) {
      throw new TypeError('Function call must contain adjacentside and adjacentangle.')
    }
    const radians = this.#adjacentAngle * (Math.PI / 180)
    const hypotenuse = this.#adjacentSide / Math.cos(radians)
    return hypotenuse
  }

  getHypotenuseWithOpposteSideAndAngle() {
    if (!this.#oppositeSide || this.#oppositeAngle) {
      throw new TypeError('Function call must contain oppositeangle and oppositeside.')
    }
    const radians = this.#oppositeAngle * (Math.PI / 180)
    const hypotenuse = this.#oppositeSide / Math.sin(radians)
    return hypotenuse
  }

  getAngleWithAdjacentSideAndHypotenus() {
    if (!this.#hypotenuse || !this.#adjacentSide) {
      throw new TypeError('Function call must contain hypotenuse and adjacentside.')
    }
    const a = this.#adjacentSide / this.#hypotenuse
    let radiusAngle = Math.acos(a)
    const adjacentAngle = radiusAngle * (180 / Math.PI)
    return adjacentAngle
  }

  getAngleWithOppositeSideAndHypotenuse() {
    if (!this.#hypotenuse || !this.#oppositeSide) {
      throw new TypeError('Function call must contain hypotenuse and oppositeside.')
    }
    const a = this.#oppositeSide / this.#hypotenuse
    let radiusAngle = Math.asin(a)
    const oppositeAngle = radiusAngle * (180 / Math.PI)
    return oppositeAngle
  }
}