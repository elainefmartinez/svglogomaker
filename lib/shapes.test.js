const { Circle, Triangle, Square} = require("./shapes.js")

describe("circle", () => {
    test("circle rendered", () => {
        const shape = new Circle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<circle cx="25" cy="75" r="20" stroke="black" stroke-width="2" fill= "blue"/>');
    })
})


describe("triangle", () => {
    test("triangle rendered", () => {
        const shape = new Triangle();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
    })
})

describe("square", () => {
    test("square rendered", () => {
        const shape = new Square();
        shape.setColor("blue");
        expect(shape.render()).toEqual('<rect x= "10" y"10" width="30" height ="30" fill="blue" />');
    })
})