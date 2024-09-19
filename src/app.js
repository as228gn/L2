/**
 * @file The starting point of the application.
 * @module src/app
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 2.0.0
 */

import { RightAngledTriangle } from './RightAngledTriangle.js'
import { Circle } from './Circle.js'

const triangle = new RightAngledTriangle()
triangle.oppositeSide = 10
triangle.adjacentSide = 8 
triangle.hypotenuse = 12.8
triangle.adjacentAngle = 51
triangle.oppositeAngle = 39

console.log(triangle.getAreaWithThreeSides())
triangle.increaseOrDecreaseByPercent(-50)
console.log(triangle.getAreaWithThreeSides())
console.log(triangle.hypotenuse)
console.log(triangle.adjacentSide)
console.log(triangle.oppositeSide)

// const circle = new Circle()

// circle.radius = 8

// console.log(circle.getCircumferenceWithDiameter())
