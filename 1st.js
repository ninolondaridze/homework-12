let year = Number(prompt ('Year:'));

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 )  {
    alert ('This is leap year');
} else {
    alert (`${year} is not leap year`);
}

