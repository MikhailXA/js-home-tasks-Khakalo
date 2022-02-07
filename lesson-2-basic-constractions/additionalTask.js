'use strict'
/*Вам дано неотрицательное число. Напишите функцию, которая обработает это число и вернет массив из отдельных цифр этого числа.*/
var number = 434124,
    output = [],
    sNumber = number.toString();
for (var i = 0, len = sNumber.length; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
}
console.log('Массив из отдельных цифр числа ' + number + ' является ' + output);



/*Вам дан массив, состоящий из чисел и строк. Задача проста - отфильтровать строки и вернуть массив чисел.*/
var arr = ['a',1,'b',0,15,'erw',];
var massiv = arr.filter(function(number) {
    return !isNaN(Number(number));
});
console.log('Отфильтрованный массив чисел: ' + massiv);



/*Заглушить троллей. Тролли набежали в комменты! С ними можно разобраться, удалив все гласные буквы в их сообщениях.
Напишите функцию, которая будет принимать строку и возвращать обработанную строку без гласных.*/
var string = prompt('write string')
function deletevowels(str) {
    return str.replace(/[aeiouаоуэыяёеюи']/gi, '');
}
console.log(string + ' Строка без гласных: ' + deletevowels(string));