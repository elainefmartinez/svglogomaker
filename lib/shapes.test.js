const { Circle, Triangle, Square} = require("./shapes.js")

describe("circle", () => {
    test("circle rendered", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="100" cy="75" r="40" stroke="black" stroke-width="2" fill= "blue"/>');
    })
})


describe("triangle", () => {
    test("triangle rendered", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="100, 18 150, 100 50, 100" fill="blue" />');
    })
})

describe("square", () => {
    test("square rendered", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x= "61" y="45" width="60" height ="60" stroke="black" stroke-width="2" fill= "blue" />');
    })
})