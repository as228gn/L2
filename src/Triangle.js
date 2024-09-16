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
  #angleC

  constructor(hypotenuse, adjacentSide, oppositeSide, adjacentAngle, oppositeAngle) {
    this.#hypotenuse = hypotenuse
    this.#adjacentSide = adjacentSide
    this.#oppositeSide = oppositeSide
    this.#adjacentAngle = adjacentAngle
    this.#oppositeAngle = oppositeAngle
    this.#angleC = 90
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
      return 180 - (this.#adjacentAngle + this.#angleC)
    } else {
      return 180 - (this.#oppositeAngle + this.#angleC)
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
}