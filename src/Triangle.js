/**
 * @file Module for the class Triangle.
 * @module src/Triangle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

export class Triangle {
  #hypotenuse
  #adjacentSide
  #oppositeSide
  #adjacentAngle
  #oppositeAngle
  #angle = 90

  // constructor(hypotenuse = 0, adjacentSide = 0, oppositeSide = 0, adjacentAngle = 0, oppositeAngle = 0) {
  //   this.#hypotenuse = hypotenuse
  //   this.#adjacentSide = adjacentSide
  //   this.#oppositeSide = oppositeSide
  //   this.#adjacentAngle = adjacentAngle
  //   this.#oppositeAngle = oppositeAngle
  //   this.#angle = 90
  // }

  set hypotenuse(hypotenuse) {
    this.#hypotenuse = hypotenuse
  }

  get hypotenuse() {
    return this.#hypotenuse
  }

  set adjacentSide(adjacentSide) {
    this.#adjacentSide = adjacentSide
  }

  get adjacentSide() {
    return this.#adjacentSide
  }

  set oppositeSide(oppositeSide) {
    this.#oppositeSide = oppositeSide
  }

  get oppositeSide() {
    return this.#oppositeSide
  }

  set adjacentAngle(adjacentAngle) {
    this.#adjacentAngle = adjacentAngle
  }

  get adjacentAngle() {
    return this.#adjacentAngle
  }

  set oppositeAngle(oppositeAngle) {
    this.#oppositeAngle = oppositeAngle
  }

  get oppositeAngle() {
    return this.#oppositeAngle
  }

  get angle() {
    return this.#angle
  }

  getAreaWithThreeSides() {
    const halfPerimeter = (this.#hypotenuse + this.#adjacentSide + this.#oppositeSide) / 2

    return Math.sqrt(halfPerimeter * (halfPerimeter - this.#hypotenuse) * (halfPerimeter - this.#adjacentSide) * (halfPerimeter - this.#oppositeSide))
  }

  getPerimeter() {
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
    return Math.sqrt(Math.pow(this.#adjacentSide, 2) + Math.pow(this.#oppositeSide, 2))
  }

  getLeg() {
    if (this.#adjacentSide) {
      return Math.sqrt(Math.pow(this.#hypotenuse, 2) - Math.pow(this.#adjacentSide, 2))
    } else {
      return Math.sqrt(Math.pow(this.#hypotenuse, 2) - Math.pow(this.#oppositeSide, 2))
    }
  }

  getLegs() {
    let legs = []
    if (this.#adjacentAngle) {
      const radians = this.#adjacentAngle * (Math.PI / 180)
      const adjacentSide = this.#hypotenuse * Math.cos(radians)
      const oppositeSide = this.#hypotenuse * Math.sin(radians)
      legs.push(adjacentSide)
      legs.push(oppositeSide)
      return legs
    } else {
      const radians = this.#oppositeAngle * (Math.PI / 180)
      const adjacentSide = this.#hypotenuse * Math.cos(radians)
      const oppositeSide = this.#hypotenuse * Math.sin(radians)
      legs.push(adjacentSide)
      legs.push(oppositeSide)
      return legs
    }
  }

  getHypotenuseAndOppositeSide() {
    let legs = []
    const radians = this.#adjacentAngle * (Math.PI / 180)
    const hypotenuse = this.#adjacentSide / Math.cos(radians)
    const oppositeSide = this.#adjacentSide * Math.tan(radians)
    legs.push('Hypotenuse: ' + hypotenuse)
    legs.push('Oppositeside: ' + oppositeSide)
    return legs
  }

  getHypotenuseAndAdjacentSide() {
    let legs = []
    const radians = this.#oppositeAngle * (Math.PI / 180)
    const hypotenuse = this.#oppositeSide / Math.sin(radians)
    const adjacentSide = this.#hypotenuse * Math.cos(radians)
    legs.push('Hypotenuse: ' + hypotenuse)
    legs.push('Adjacentside: ' + adjacentSide)
    return legs
  }

  getAnglesWhitThreeSides() {
    let degrees = []
    const a = this.#adjacentSide/this.#hypotenuse
    let radiusAngle = Math.acos(a)
    const adjacentAngle = radiusAngle * (180/Math.PI)
    const oppositeAngle = 180 - (90 + adjacentAngle)
    degrees.push('Adjacentangle: ' + adjacentAngle)
    degrees.push('OppositeAngle: ' + oppositeAngle)
    return degrees
  }
}