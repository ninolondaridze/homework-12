let number = prompt ('Enter a number: ');
let check = isNaN(number);

while (check == true) {
    number = prompt ('Enter a number: ');
    check = isNaN(number);
}
alert(number);

