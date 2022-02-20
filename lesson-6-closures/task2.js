'use script'
function interviewQuestion(whattoask) {
    return function() {
        if (whattoask === 'designer') {
            console.log('John can you please explain what UX design is?');
        } else if (whattoask === 'teacher') {
            console.log('What subject do you teach John?')
        } else {
            console.log('Hello John, what do you do?')
        }
    }
}
interviewQuestion('teacher')('John');

