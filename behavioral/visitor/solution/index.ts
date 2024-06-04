// Element interface
interface ShapeElement {
  accept(v: ShapeVisitor): void;
}

// Concrete element
class Square implements ShapeElement {
  constructor(public readonly x: number) { }
  accept(v: ShapeVisitor) {
    return v.visitSquare(this)
  }
}
class Triangle implements ShapeElement {
  constructor(public readonly x: number, public readonly y: number, public readonly z: number) { };
  accept(v: ShapeVisitor) {
    return v.visitTriangle(this)
  }
}

// Visitor interface
interface ShapeVisitor {
  visitSquare(element: Square): number
  visitTriangle(element: Triangle): number
}

// Concrete visitor
class PerimeterCalculator implements ShapeVisitor {
  visitSquare(element: Square): number {
    return element.x * 4
  }
  visitTriangle(element: Triangle): number {
    return element.x + element.y + element.z
  }
}

class AreaCalculator implements ShapeVisitor {
  visitSquare(element: Square): number {
    return Math.pow(square.x, 2)
  }
  visitTriangle(element: Triangle): number {
    // Assuming Heron's formula for triangle area calculation
    const s = (element.x + element.y + element.z) / 2;
    return Math.sqrt(s * (s - element.x) * (s - element.y) * (s - element.z));
  }
}

// Using
const areaCalculator = new AreaCalculator()
const perimeterCalculator = new PerimeterCalculator()

const square = new Square(5)
const triangle = new Triangle(6, 8, 10)

console.log(`Area calculator for square: ${square.accept(areaCalculator)}`)
console.log(`Perimeter calculator for square: ${square.accept(perimeterCalculator)}`)

console.log(`Area calculator for triangle: ${triangle.accept(areaCalculator)}`)
console.log(`Perimeter calculator for triangle: ${triangle.accept(perimeterCalculator)}`)