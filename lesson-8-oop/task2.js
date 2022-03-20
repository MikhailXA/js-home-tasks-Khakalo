'use strict'
function Palindrome(str) {
    str = str.toLowerCase().replace(/\s/g,'');
    return str === str.split('').reverse().join('');
}
console.log(Palindrome('Anna'));
console.log(Palindrome('А роза упала на лапу Азора'));
console.log(Palindrome('Вася'));
console.log(Palindrome('12321'));
console.log(Palindrome('123212'));

