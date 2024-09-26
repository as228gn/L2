# Geometry module
This is a geometry module that helps you calculate different calculations on a right-angled triangle, rectangle and circle. It helps you calculate the area and perimeter.  
On the right-angled triangle it also helps you calculate the angles and sides. For all three shapes you can increase or decrease the area by a percentage and get the new measurements for the different sides.

## Installation
npm install geometry_ltwo  
or  
clone this [repository](https://github.com/as228gn/L2) from github and copy the src-folder into your code
## Usage
To use the module you import the class you want to use (Circle, Rectangle or RightAngledTriangle) and make a new object of it, you set the known properties and call the function you want to use. Se example below.
![Example](https://github.com/as228gn/L2/blob/main/img/CodeExample.png?raw=true)
### Circle
#### Properties
radius  
diameter
#### Functions
getArea()  
Returns the area, needs the radius property.  

getCircumferenceWithRadius()  
Returns the circumference, needs the radius property.  

getCircumferenceWithDiameter()  
Returns the circumference, needs the diameter property.  
  
increaseOrDecreaseByPercent()  
Sets the new property measurments to increase the percentage by the percent being sent in to the function.  
### Rectangle
#### Properties
length  
width
#### Functions
getArea()  
Returns the perimeter, needs the length and width properties.  

getPerimeter()  
Returns the perimeter, needs the length and width properties.  

increaseOrDecreaseByPercent()  
Sets the new property measurments to increase the percentage by the percent being sent in to the function.  
### RightAngledTriangle
#### Properties
hypotenuse  
adjacentSide  
oppositeSide  
adjacentAngle  
oppositeAngle  
angle = 90  

To call the functions correctly, it is important to know which property is which. See picture below to understand their locations.
![Triangle](https://github.com/as228gn/L2/blob/main/img/RightSidedTriangle.png?raw=true)
#### Functions
getAreaWithThreeSides()  
Returns the area, needs the hypotenuse, adjacentSide and oppositeSide properties.  

getPerimeter()  
Returns the perimeter, needs the hypotenuse, adjacentSide and oppositeSide properties.  

getHypotenuse()  
Returns the hypotenuse, needs the adjacentSide and oppositeSide properties.  

getOppositeSideWithAdjacentSideAndHypotenuse()  
Returns the oppositeSide, needs the adjacentSide and the hypotenuse properties.  

getAdjacentSideWithOppositeSideAndHypotenuse()  
Returns the adjacentSide, needs the oppositeSide and the hypotenuse properties.  

getOppositeAngleWithAdjacentAngle()  
Returns the oppositeAngle, needs the adjacentAngle property.  

getAdjacentAngleWithOppositeAngle()  
Returns the adjacentAngle, needs the oppositeAngle property.  

getAdjacentSideWithAdjacentAngleAndHypotenuse()  
Returns the adjacentSide, needs the adjacentAngle and the hypotenuse properties.  

getHypotenuseWithAdjacentAngleAndSide()  
Returns the hypotenuse, needs the adjacentAngle and the adjacentSide properties.  

getAdjacentAngleWithAdjacentSideAndHypotenus()  
Returns the adjacentAngle, needs the adjacentSide and the hypotenuse properties.  

getOppositeAngleWithOppositeSideAndHypotenuse()  
Returns the oppositeAngle, needs the oppositeSide and the hypotenuse properties.  

increaseOrDecreaseByPercent()  
Sets the new property measurments to increase the percentage by the percent being sent in to the function.  

## License
MIT License

Copyright (c) 2024 Anna Ståhlberg

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.