// function add
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(80, 38));

// function subtract
function subtract(num1, num2) {
    return num1 - num2;
}
console.log(subtract(80, 38));

// function multiply
function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(80, 38));

// function divide
function divide(num1, num2) {
    return num1 / num2;
}
console.log(divide(80,40));

// function increment
function increment(n) {
    n++;
    return n;
}
console.log(increment(6));


// function decrement(n)
function decrement(n) {
    n--;
    return n;
}
console.log(decrement(6));


// function parseFloat()

function preserveDecimal(string) {
    return parseFloat(string);
}
console.log(preserveDecimal("50.345"));

// function parseInt()

function makeInt(n) {
    return parseInt(n, 10);
}

console.log(makeInt("10.856"));