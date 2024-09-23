# Test Report RightAngledTriangle
Date 2024-09-23  
This report documents the tests of the RightAngledTriangle module.  
The tests are conducted manually, the properties are set to the object and the function to be tested are called.  

| Function | Properties | Expected Result | Result | Status |
|----------|------------|-----------------|--------|--------|
| getAreaWithThreeSides()| adjacentSide = 8, oppositeSide = 10, hypotenuse = 12,8 | 39.999979999995 | 39.999979999995 | Passed |
| getPerimeter() | adjacentSide = 8, oppositeSide = 10, hypotenuse = 12,8 | 30.8 | 30.8 | Passed |
| getHypotenuse() | adjacentSide = 8, oppositeSide = 10 | 12.806248474865697 | 12.806248474865697 | Passed |
| getOppositeSideWithAdjacentSideAndHypotenuse() | adjacentSide = 8, hypotenuse = 12,8 | 9.991996797437439 | 9.991996797437439 | Passed |
| getAdjacentSideWithOppositeSideAndHypotenuse() | oppositeSide = 10, hypotenuse = 12,8 | 7.989993742175273 | 7.989993742175273 | Passed |
| getOppositeAngleWithAdjacentAngle() | adjacentAngle = 51 | 39 | 39 | Passed |
| getAdjacentAngleWithOppositeAngle() | oppositeAngle = 39 | 51 | 51 | Passed |
| getAdjacentSideWithAdjacentAngleAndHypotenuse() | adjacentAngle = 51, hypotenuse = 12,8 | 8.05530100543792 | 8.05530100543792 | Passed |
| getHypotenuseWithAdjacentAngleAndSide() | adjacentAngle = 51, adjacentSide = 8 | 12.712125832525995 | 12.712125832525995 | Passed |
| getAdjacentAngleWithAdjacentSideAndHypotenus()| adjacentSide = 8, hypotenuse = 12,8 | 51.31781254651057 | 51.31781254651057 | Passed |
| getOppositeAngleWithOppositeSideAndHypotenuse() | oppositeSide = 10, hypotenuse = 12,8 | 51.37516712694704 | 51.37516712694704 | Passed |
  
| Function | In | Properties | New properties | Status |
|----------|----|------------|----------------|--------|
| increaseOrDecreaseByPercent() | 45 |  adjacentSide = 8, oppositeSide = 10, hypotenuse = 12,8 | adjacentSide = 9.633275663033837, oppositeSide = 12.041594578792296, hypotenuse = 15.41324106085414 | Passed | 