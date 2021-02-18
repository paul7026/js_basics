function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "sum":
            return arg1 + arg2;
        case "dif":
            return arg1 - arg2;
        case "mult":
            return arg1 * arg2;
        case "div":
            return arg1 / arg2;
        default:
            return "такой операции нет"
    }
}



console.log(mathOperation(5, 10, "sum"));

console.log(mathOperation(5, 10, "dif"));

console.log(mathOperation(5, 10, "mult"));

console.log(mathOperation(5, 10, "div"));

console.log(mathOperation(5, 10, "gbgvghj"));