let number = prompt ('Enter a number: ');

while (isNaN(number)) {
    alert('You entered wrong number');
    number = prompt('Enter number again')
}
alert(number);

