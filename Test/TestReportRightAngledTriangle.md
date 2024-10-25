# Test Report RightAngledTriangle
Date 2024-10-24  
This report documents the tests of the RightAngledTriangle module.  
The tests are conducted manually, the properties are set to the object and the function to be tested are called.  

## Test for correct set properties

| Function | Properties | Expected Result | Result | Status |
|----------|------------|-----------------|--------|--------|
| getAreaWithThreeSides()| adjacentSide = 8<br>oppositeSide = 10<br>hypotenuse = 12,8 | 39.999979999995 | 39.999979999995 | Passed |
| getPerimeter() | adjacentSide = 8<br>oppositeSide = 10<br>hypotenuse = 12,8 | 30.8 | 30.8 | Passed |
| getHypotenuse() | adjacentSide = 8<br>oppositeSide = 10 | 12.806248474865697 | 12.806248474865697 | Passed |
| getOppositeSideWithAdjacentSideAndHypotenuse() | adjacentSide = 8<br>hypotenuse = 12,8 | 9.991996797437439 | 9.991996797437439 | Passed |
| getAdjacentSideWithOppositeSideAndHypotenuse() | oppositeSide = 10<br>hypotenuse = 12,8 | 7.989993742175273 | 7.989993742175273 | Passed |
| getOppositeAngleWithAdjacentAngle() | adjacentAngle = 51 | 39 | 39 | Passed |
| getAdjacentAngleWithOppositeAngle() | oppositeAngle = 39 | 51 | 51 | Passed |
| getAdjacentSideWithAdjacentAngleAndHypotenuse() | adjacentAngle = 51<br>hypotenuse = 12,8 | 8.05530100543792 | 8.05530100543792 | Passed |
| getHypotenuseWithAdjacentAngleAndSide() | adjacentAngle = 51<br>adjacentSide = 8 | 12.712125832525995 | 12.712125832525995 | Passed |
| getAdjacentAngleWithAdjacentSideAndHypotenus()| adjacentSide = 8<br>hypotenuse = 12,8 | 51.31781254651057 | 51.31781254651057 | Passed |
| getOppositeAngleWithOppositeSideAndHypotenuse() | oppositeSide = 10<br>hypotenuse = 12,8 | 51.37516712694704 | 51.37516712694704 | Passed |
  
| Function | In | Properties | New properties | Status |
|----------|----|------------|----------------|--------|
| increaseOrDecreaseByPercent() | 45 |  adjacentSide = 8<br>oppositeSide = 10<br>hypotenuse = 12,8 | adjacentSide = 9.633275663033837<br>oppositeSide = 12.041594578792296<br>hypotenuse = 15.41324106085414 | Passed | 

## Test for no properties

| Function | Properties | Expected Result | Result | Status |
|----------|------------|-----------------|--------|--------|
| getArea()| none | Error: getArea() in RightAngledTriangle must contain hypotenuse, adjacentside and oppositeside. | Error: getArea() in RightAngledTriangle must contain hypotenuse, adjacentside and oppositeside.. | Passed |
| getPerimeter() | none | Error: getPerimeter() in RightAngledTriangle must contain hypotenuse, adjacentside and oppositeside. | Error: getPerimeter() in RightAngledTriangle must contain hypotenuse, adjacentside and oppositeside.. | Passed |
| getHypotenuse() | none | Error: getHypotenuse() in RightAngledTriangle must contain adjacentside and oppositeside. | Error: getHypotenuse() in RightAngledTriangle must contain adjacentside and oppositeside. | Passed |
| getOppositeSide() | none | Error: getOppositeSide() in RightAngledTriangle must contain adjacentside and hypotenuse. | Error: getOppositeSide() in RightAngledTriangle must contain adjacentside and hypotenuse. | Passed |
| getAdjacentSide() | none | Error: getAdjacenSide() in RightAngledTriangle must contain adjacentside and oppositeside. | Error: getAdjacenSide() in RightAngledTriangle must contain adjacentside and oppositeside. | Passed |
| getOppositeAngle() | none | Error: getOppositeAngle() in RightAngledTriangle must contain adjacentangle. | Error: getOppositeAngle() in RightAngledTriangle must contain adjacentangle. | Passed |
| getAdjacentAngle() | none | Error: getAdjacentAngle() in RightAngledTriangle must contain oppositeangle. | Error: getAdjacentAngle() in RightAngledTriangle must contain oppositeangle. | Passed |
| getAdjacentSideWithAngle() | none | Error: getAdjacentSideWithAngle() in RightAngledTriangle must contain hypotenuse and adjacentangle.. | Error: getAdjacentSideWithAngle() in RightAngledTriangle must contain hypotenuse and adjacentangle. | Passed |
| getHypotenuseWithAngle() | none | Error: getHypotenuseWithAngle() in RightAngledTriangle must contain adjacentside and adjacentangle. | Error: getHypotenuseWithAngle() in RightAngledTriangle must contain adjacentside and adjacentangle. | Passed |
| getAdjacentAngleWithSide()| none | Error: getAdjacentAngleWithSide() in RightAngledTriangle must contain hypotenuse and adjacentside. | Error: getAdjacentAngleWithSide() in RightAngledTriangle must contain hypotenuse and adjacentside. | Passed |
| getOppositeAngleWithSide() | none | Error: getOppositeAngleWithSide() in RightAngledTriangle must contain hypotenuse and oppositeside. | Error: getOppositeAngleWithSide() in RightAngledTriangle must contain hypotenuse and oppositeside. | Passed |
  
| Function | In | Properties | Expected Result | Result | Status |
|----------|----|------------|-----------------|--------|--------|
| increaseOrDecreaseByPercent() | 45 | none | Error: increaseOrDecreaseByPercent() in RightAngledTriangle must contain hypotenuse, adjacentside and oppositeside. | Error: increaseOrDecreaseByPercent() in RightAngledTriangle must contain hypotenuse, adjacentside and oppositeside. |Passed | 

[TestRapport](testrapport.md)  
[Rectangle](TestReportRectangle.md)  
[Circle](TestReportCircle.md)