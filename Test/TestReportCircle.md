# Test Report Circle
Date 2024-10-24  
This report documents the tests of the Circle module.  
The tests are conducted manually, the properties are set to the object and the function to be tested are called.  

## Tests for correct set properties

| Function | Properties | Expected Result | Result | Status |
|----------|------------|-----------------|--------|--------|
| getArea() | radius = 5 | 78.53981633974483 | 78.53981633974483 | Passed |
| getCircumferenceWithRadius() | radius = 5 | 31.41592653589793 | 31.41592653589793 | Passed |
| getCircumferenceWithDiameter() | diameter = 10 | 31.41592653589793 | 31.41592653589793 | Passed |

| Function | In | Properties | New properties | Status |
|----------|----|------------|----------------|--------|
| increaseOrDecreaseByPercent() | 45 |  radius = 5<br>diameter = 10 | radius = 6.020797289396148<br>diameter = 12.041594578792296  | Passed |

## Test for no properties

| Function | Properties | Expected Result | Result | Status |
|----------|------------|-----------------|--------|--------|
| getArea() | none | Error: getArea() in Circle must contain radius. | Error: getArea() in Circle must contain radius. | Passed |
| getCircumferenceWithRadius() | none | Error: getCircumferenceWithRadius() in Circle must contain radius. | Error: getCircumferenceWithRadius() in Circle must contain radius. | Passed |
| getCircumferenceWithDiameter() | none | Error: getCircumferenceWithDiameter() in Circle must contain diameter. | Error: getCircumferenceWithDiameter() in Circle must contain diameter. | Passed |

| Function | In | Properties | Expected Result | Result | Status |
|----------|----|------------|-----------------|--------|--------|
| increaseOrDecreaseByPercent() | 45 |  none | Error: increaseOrDecreaseByPercent() in Circle must contain radius.  | Error: increaseOrDecreaseByPercent() in Circle must contain radius. | Passed |

[TestRapport](testrapport.md)  
[RightAngledTriangle](TestReportRightAngledTriangle.md)  
[Rectangle](TestReportRectangle.md)