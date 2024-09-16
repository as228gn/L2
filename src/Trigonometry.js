/**
 * @file Module for the class Trigonometry.
 * @module src/Trigonometry
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 1.0.0
 */

export class Trigonometry {

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

  getLegs(angle, hypotenuse) {
    let legs = []
    const radians = angle * (Math.PI / 180)
    const adjacentSide = hypotenuse * Math.cos(radians)
    const oppositeSide = hypotenuse * Math.sin(radians)
    legs.push(adjacentSide)
    legs.push(oppositeSide)
    return legs
  }

  getHypotenuseAndOppositeSide(angle, adjacentSide) {
    let legs = []
    const radians = angle * (Math.PI / 180)
    const hypotenuse = adjacentSide / Math.cos(radians)
    const oppositeSide = adjacentSide * Math.tan(radians)
    legs.push(hypotenuse)
    legs.push(oppositeSide)
    return legs
  }

  getHypotenuseAndAdjacentSide(angle, oppositeSide) {
    let legs = []
    const radians = angle * (Math.PI / 180)
    const hypotenuse = oppositeSide / Math.sin(radians)
    const adjacentSide = hypotenuse * Math.cos(radians)
    legs.push(hypotenuse)
    legs.push(adjacentSide)
    return legs
  }

  getAnglesWhitThreeSides(adjacentSide, hypotenuse) {
    let degrees = []
    const a = adjacentSide/hypotenuse
    let radiusAngle = Math.acos(a)
    const degreesA = radiusAngle * (180/Math.PI)
    const degreesB = 180 - (90 + degreesA)
    degrees.push(degreesA)
    degrees.push(degreesB)
    return degrees
  }
}