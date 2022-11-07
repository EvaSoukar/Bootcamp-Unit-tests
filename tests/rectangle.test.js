const { getRectanglePerimeter, getRectangleArea, getRectangleInfo} = require("../js/rectangle");

test("should return rectangle perimeter", () => {
    const perimeter = getRectanglePerimeter(20, 10);
    expect(perimeter).toBe(60);
})

test("should return rectangle area", () => {
    const area = getRectangleArea(10, 5);
    expect(area).toBe(50);
})

test("should return rectangle information", () => {
    const logSpy = jest.spyOn(console, "log")
    getRectangleInfo(10, 5);
    expect(logSpy).toHaveBeenCalledWith('The perimeter of a rectangle is 30 and the area is 50')
})