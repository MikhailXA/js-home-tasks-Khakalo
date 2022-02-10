'use strict'
var tasksCompleted = {
    'Anna': 29,
    'Serg': 35,
    'Elena': 1,
    'Anton': 99,
    'Maks': 123,
    'Lolita' : 32,
    'Inna' : 23432,
}
function biggest (obj) {
    var result = 0;
    var resultName ='';
    for (let key in obj) {
        if (result < obj[key]) {
            result = obj[key];
            resultName = key;
        }
    }
    return resultName;
}
console.log(biggest(tasksCompleted));