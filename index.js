function task1() {
    var age = prompt('How old are you?');
    if (age < 13) {
        alert ('Not for kids!')
    }
    else if (12 < age && age < 20) {
        alert ('Welcome, teenager!')
    }
    else if (age > 19) {
        alert ('You are too old!')
    }
};

function task2() {
    var year = prompt ('Enter the year');
    if (year % 4 != 0) {
        alert ('The year ' + year + ' is not a leap year.')
    }
    else if (year % 4 == 0 && year % 100 != 0) {
        alert ('The year ' + year + ' is a leap year.')
    }
    else if (year % 4 == 0 && year % 100 == 0) {
        if (year % 100 == 0 && year % 400 != 0) {
            alert ('The year ' + year + ' is not a leap year.')
        }
        else if (year % 100 == 0 && year % 400 == 0) {
            alert ('The year ' + year + ' is a leap year.')
        }
    }
}

function task3() {
    var a = prompt ('Enter number a');
    var b = prompt ('Enter number b');
    var c = prompt ('Enter number c');

    var x1 = (-b + Math.sqrt(b*b - 4*a*c))/2*a;
    var x2 = (-b - Math.sqrt(b*b - 4*a*c))/2*a;

    if (a == 0 && b == 0 && c == 0) {
        alert ('There is nothing to be solved.')
    }
    else if (a == 0 && b == 0 && c != 0) {
        alert ('The equation has no root.')
    }
    else if (a == 0 && b != 0 && c != 0) {
        alert ('There is one root: x = ' + -c/b)
    }
    else if (b*b - 4*a*c < 0) {
        alert ('The equation has no real root')
    }
    else if (b*b - 4*a*c >= 0) {
        alert ('The equation has 2 roots: x1 = ' + Math.round(x1*100)/100+' and x2 = '+ Math.round(x2*100)/100)
    }
}