//your code here
class OutOfRangeError extends Error {
  constructor() {
    super("Expression should only consist of integers and +-/* characters");
    this.name = "OutOfRangeError";
  }
}

class InvalidExprError extends Error {
  constructor() {
    super("Expression should not have an invalid combination of operators");
    this.name = "InvalidExprError";
  }
}

function evalString(expression) {
  try {
    if (/(\+\+|--|\*\*|\/\/|\/\+|\*\+|\+\*|\+\-|\-\+)$/g.test(expression)) {
      throw new InvalidExprError();
    }

    if (/^(\+|\*|\/)/.test(expression)) {
      throw new SyntaxError("Expression should not start with invalid operator");
    }

    if (/(\+|\*|\/|-)$/g.test(expression)) {
      throw new SyntaxError("Expression should not end with invalid operator");
    }

    // Your code to evaluate the expression here

    return "Valid Expression"; // Replace this with the actual evaluation code
  } catch (error) {
    if (error instanceof OutOfRangeError || error instanceof InvalidExprError) {
      console.error(error.name + ": " + error.message);
    } else {
      console.error("An unexpected error occurred: " + error.message);
    }
  }
}

// Example usage:
try {
  evalString("1 + 2");
} catch (error) {
  console.error("An unexpected error occurred: " + error.message);
}
