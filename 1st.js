let year = prompt ('Year:');
let check = year >= 1000;

if (check==true && year % 4 == 0 && year % 400 == 0)  {
    alert ('This is leap year');
}
else if (check==false && year % 4 == 0) {
    alert ('This is leap year');
}
else if (check==true && year % 4 == 0 && year % 400 !== 0) {
    alert ('This is not leap year');
}    
 else {
    alert ('This is not leap year');
}

