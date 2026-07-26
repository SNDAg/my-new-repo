class Calculator {
    constructor() {}
    add(a, b) { return a + b; }
    sub(a, b) { return a - b; }
    mul(a, b) { return a * b; }
    div(a, b) { 
        if (b === 0) {
            return -1;
        }
        return a / b; 
    }
  }

exports.Calculator = Calculator;
