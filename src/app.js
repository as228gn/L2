/**
 * @file The starting point of the application.
 * @module src/app
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 2.0.0
 */

import { Triangle } from './Triangle.js'

const triangle = new Triangle()

const area = triangle.cosinus(42, 11)
console.log(area)