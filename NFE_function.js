function sayHello(a) {

    let currentValue = a;

    function f(b) {
        currentValue += b;
        return f;
    }

    f.toString = function () {
        return currentValue;
    }

    return f;
}

function func(a) {
    return function(b) {
        console.log(a + ' ' + b);
    }
}

func("Hello")("world!");