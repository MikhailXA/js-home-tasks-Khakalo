'use strict';

var firstName;
do {
    firstName = String(prompt('Ваше имя ?','Mikhail'));
} while (firstName === '');
var lastName;
do {
    lastName = String(prompt('Ваша фамилия ?','Khakalo'));
} while (lastName === '');
var secondName;
do {
    secondName = String(prompt('Ваше отчество ?','Vladimirivich'));
} while (secondName === '');
var age;
do {
    age = Number(prompt('Ваш возраст ?','24'));
} while (age > 100 || age < 0);
var gender = confirm('Ваш пол - мужской ?');
var fullName = lastName + ' ' + firstName + ' ' + secondName;
gender = gender ? 'мужской' : 'женский';

var pension;
if (age > 60) {
    pension = 'да';
} else {
    pension = 'нет';
}

alert('Ваше ФИО: ' + fullName + "\n" + 'Ваш возраст в годах: ' + age + "\n" + 'Ваш возраст в днях: ' + age*365 + "\n" + 'Через 5 лет вам будет: ' + (age + 5) + "\n" + 'Ваш пол: ' + gender + "\n" + 'Вы на пенсии: ' + pension);

