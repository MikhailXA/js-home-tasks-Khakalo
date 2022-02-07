'use strict'
var string = prompt ('Write a string');
function findVowels(str) {
    var count = 0;
    const vowels = ['а', 'о', 'у', 'э', 'ы', 'я', 'ё', 'е', 'ю', 'и', 'a', 'e', 'i', 'o', 'u'];
    for (var symbol of str.toLowerCase()){
        if (vowels.includes(symbol)) {
            count +=1;
        }
    }
    return count;
}
console.log('This string has: ' + findVowels(string) + ' vowels');