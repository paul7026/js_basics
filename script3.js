let a = Math.floor(Math.random()*99) + 1; // 1-99 положительные числа 
a *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // 50% положительное или отрицательное 

let  b = Math.floor(Math.random()*99) + 1; // 1-99 положительные числа 
b *= Math.floor(Math.random()*2) == 1 ? 1 : -1; // 50% положительное или отрицательное 

if (a >= 0 && b >= 0) {
    alert(a - b);
} else if (a < 0 && b < 0) {
    alert(a * b);
} else {
    alert(a + b);
}