function receivesAFunction(cb) {
    return cb()
}

function returnsANamedFunction() {
    return (function doMath(num1){
        return num1**2
    })
}

function returnsAnAnonymousFunction() {
    return (num2, num3) => num2 + num3;
}