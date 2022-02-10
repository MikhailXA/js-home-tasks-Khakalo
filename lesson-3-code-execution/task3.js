'use strict'
function sum() {
    var numbers = [];
    while (true) {
        var value = prompt("Введите число", 0);
        if (value === "" || value === null || !isFinite(value)) break;
        numbers.push(+value);
    }
    var sum = 0;
    for (var number of numbers) {
        sum += number;
    }
    return sum;
}
alert( sum() );