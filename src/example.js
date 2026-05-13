// Example file with intentional linting violations
// This file is intentionally written with linting errors to demonstrate the CI workflow

const unusedVariable = "this variable is never used"
const anotherUnused = 42

function greet(name) {
    console.log("Hello, " + name)
    return "Greeting sent"
}

function calculateSum(a, b) {
    const result = a + b
    return result
}

const message = "This uses double quotes instead of single quotes"
const missingSemi = "no semicolon at the end"

greet("World")
calculateSum(5, 10)
