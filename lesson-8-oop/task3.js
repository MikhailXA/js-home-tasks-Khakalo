'use strict'
function anclean(arr) {
    var words = {};
    for (var i = 0; i < arr.length; i++) {
        var filter = arr[i].toLowerCase().split('').sort().join('');
        words[filter] = arr[i];
    }
    var result = [];
    for (var key in words) result.push(words[key]);
    return result;
}
var arr = ['воз', 'киборг', 'корсет', 'ЗОВ', 'гробик', 'костер', 'сектор'];
alert( anclean(arr) );
