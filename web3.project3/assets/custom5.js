// ---------programiz.exp20
function mathematicalOperations() {
  var oprator = prompt("Enter operator ( either +, -, * or / ): ");
  var number1 = Number(prompt("Enter first number: "));
  var number2 = Number(prompt("Enter second number: "));
  var result;
  if (oprator == "+") {
    result = number1 + number2;
  } else if (oprator == "-") {
    result = number1 - number2;
  } else if (oprator == "*") {
    result = number1 * number2;
  } else if (oprator == "/") {
    result = number1 / number2;
  } else {
    console.log("oprator not found.");
  }
  console.log(`${number1} ${oprator} ${number2} = ${result}`);
}
mathematicalOperations();
function mathematicalOperationsSwich() {
  var oprator = prompt("Enter operator ( either +, -, * or / ): ");
  var number1 = Number(prompt("Enter first number: "));
  var number2 = Number(prompt("Enter second number: "));
  var result;
  switch (oprator) {
    case "+":
      result = number1 + number2;
      console.log(`${number1} + ${number2} = ${result}`);
      break;
    case "-":
      result = number1 - number2;
      console.log(`${number1} - ${number2} = ${result}`);
      break;
    case "*":
      result = number1 * number2;
      console.log(`${number1} * ${number2} = ${result}`);
      break;
    case "/":
      result = number1 / number2;
      console.log(`${number1} / ${number2} = ${result}`);
      break;
    default:
      console.log("Invalid operator");
      break;
  }
}
mathematicalOperationsSwich();
