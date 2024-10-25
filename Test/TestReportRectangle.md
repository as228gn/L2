# Test Report Rectangle
Date 2024-10-24  
This report documents the tests of the Rectangle module.  
The tests are conducted manually, the properties are set to the object and the function to be tested are called.  

## Tests for correct set properties

| Function | Properties | Expected Result | Result | Status |
|----------|------------|-----------------|--------|--------|
| getArea() | length = 10<br>width = 8 | 80 | 80 | Passed |
| getPerimeter() | length = 10<br>width = 8 | 36 | 36 | Passed |

| Function | In | Properties | New properties | Status |
|----------|----|------------|----------------|--------|
| increaseOrDecreaseByPercent() | 45 |  length = 10<br>width = 8 | length = 12.041594578792296<br>width = 9.633275663033837 | Passed |

## Test for no properties

| Function | Properties | Expected Result | Result | Status |
|----------|------------|-----------------|--------|--------|
| getArea() | none | Error: getArea() in Rectangle must contain length and width. | Error: getArea() in Rectangle must contain length and width.. | Passed |
| getPerimeter() | none | Error: getPerimeter() in Rectangle must contain length and width. | Error: getPerimeter() in Rectangle must contain length and width. | Passed |

| Function | In | Properties | Expected Result | Result | Status |
|----------|----|------------|-----------------|--------|--------|
| increaseOrDecreaseByPercent() | 45 | none | Error: increaseOrDecreaseByPercent() in Rectangle must contain length and width. | Error: increaseOrDecreaseByPercent() in Rectangle must contain length and width. | Passed |

[TestRapport](testrapport.md)  
[RightAngledTriangle](TestReportRightAngledTriangle.md)  
[Circle](TestReportCircle.md)
