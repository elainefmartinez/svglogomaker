class Shape {
    constructor() {
        this.color =""
    }
    setColor(color) {
        this.color=color 
    }
}

class Circle extends Shape {
    render() {
        return `<circle cx="100" cy="75" r="40" stroke="black" stroke-width="2" fill= "${this.color}"/>`
        
    }
}

class Square extends Shape {
    render() {
        return `<rect x= "61" y="45" width="60" height ="60" stroke="black" stroke-width="2" fill= "${this.color}" />`
    }
}

class Triangle extends Shape {
    render() {
        return `<polygon points="100, 18 150, 100 50, 100" fill="${this.color}" />`
    }
}


module.exports = { Circle, Square, Triangle}