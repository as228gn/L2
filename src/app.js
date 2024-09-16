/**
 * @file The starting point of the application.
 * @module src/app
 * @author Anna Ståhlberg <as228gn@student.lnu.se>
 * @version 2.0.0
 */

import { Trigonometry } from './Trigonometry.js'

const triangle = new Trigonometry()

const area = Trigonometry.getAnglesWhitThreeSides(6, 7.2)
console.log(area)