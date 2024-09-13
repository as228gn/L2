/**
 * @file Module for the class Triangle.
 * @module src/Triangle
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

export class Triangle {

  constructor() {}

  getAreaWithBaseHeight(base, height){
    return (base * height)/2
  }

  getAreaWithThreeSides(sideOne, sideTwo, sideThree) {
    const halfPerimeter = (sideOne + sideTwo + sideThree)/2

    return Math.sqrt(halfPerimeter * (halfPerimeter - sideOne) * (halfPerimeter - sideTwo) * (halfPerimeter - sideThree))
  }

  getPerimeter(sideOne, sideTwo, sideThree) {
    return sideOne + sideTwo + sideThree
  }

  getRemainingAngle(angleOne, angleTwo) {
    const sum = angleOne + angleTwo
    return 180 - sum
  }

  getHypotenuse(legOne, legTwo) {
    return Math.sqrt(Math.pow(legOne, 2) + Math.pow(legTwo, 2))
  }

  getLeg(hypotenuse, leg) {
    return Math.sqrt(Math.pow(hypotenuse, 2) -  Math.pow(leg, 2))
  }

  cosinus(angle, hypotenuse) {
    let legs = []
    const radians = angle * (Math.PI / 180)
    const closeLeg = hypotenuse * Math.cos(radians)
    const oppositeLeg = hypotenuse * Math.sin(radians)
    legs.push(closeLeg)
    legs.push(oppositeLeg)
    return legs
  }
}