let firstInput = Number(prompt('Please, tell 1st number: '));
let secondInput = Number(prompt('Please, tell 2nd number: '));

while (isNaN(firstInput) || isNaN(secondInput)) {
    let firstInput = Number(prompt('Please, tell 1st number: '));
    let secondInput = Number(prompt('Please, tell 2nd number: '));
}

let typeOfOperation = prompt('What would you like to perform?');

while (
    typeOfOperation !== '+' &&
    typeOfOperation !== '-' &&
    typeOfOperation !== '*' &&
    typeOfOperation !== '/'
) {
    typeOfOperation = prompt('Enter operations');
}

let result;

switch (typeOfOperation) {
    case '+':
        result = firstInput + secondInput;
        break;

    case '-':
        result = firstInput - secondInput;
        break;

    case '*':
        result = firstInput * secondInput;
        break;

    case '/':
        result = firstInput / secondInput;
        break;
}
alert(`The result is: ${result} `)