/**
 * @file The starting point of the application.
 * @module src/app
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 2.0.0
 */

import { Triangle } from './Triangle.js'

const triangle = new Triangle()
triangle.hypotenuse = 11.3
triangle.oppositeSide = 8
triangle.oppositeAngle = 44.9
triangle.adjacentSide = 8

console.log(triangle.getHypotenuse())