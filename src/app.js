/**
 * @file The starting point of the application.
 * @module src/app
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 2.0.0
 */

//import { RightAngledTriangle } from './RightAngledTriangle.js'
//import { Rectangle } from './Rectangle.js'
import { Circle } from './Circle.js'

//const triangle = new RightAngledTriangle()
//const rectangle = new Rectangle()
const circle = new Circle()

//  triangle.oppositeSide = 10
//  triangle.adjacentSide = 8 
//  triangle.hypotenuse = 12.8
 //triangle.adjacentAngle = 51
 //triangle.oppositeAngle = 39

// console.log(triangle.increaseOrDecreaseByPercent(45))

// rectangle.length = 10
// rectangle.width = 8

//console.log(rectangle.increaseOrDecreaseByPercent(45))

circle.radius = 5
circle.diameter = 10

console.log(circle.increaseOrDecreaseByPercent(45))
console.log(circle.radius)
console.log(circle.diameter)
