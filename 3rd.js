let firstInput = prompt('Please tell 1st number: ');
let secondInput = prompt('Please tell second number: ');
let typeOfOperation = prompt('What would you like to perform?');

if (typeOfOperation == '*') {
    alert (`Product is: ${firstInput*secondInput}`);
}
else if (typeOfOperation == '/') {
    alert (`Quotient is: ${firstInput/secondInput}`);
}
else if (typeOfOperation == '+') {
    alert (`Sum is: ${Number(firstInput)+Number(secondInput)}`);
}
else if (typeOfOperation == '-') {
    alert (`Difference is: ${Number(firstInput)-Number(secondInput)}`);
}