//Question-1:  Write a function that takes a name as an argument and logs a greeting message to the console, like "Hello, [Name]!".

const hello = (name) => {
    return `Hello ${name}!`;
}
console.log(hello("Junaid"));

//Question-5:  Write a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.

const base = 2;
const exponent = 3;

const power = (base,exponent) => {
    return Math.pow(base,exponent);
}

console.log(`${power(base,exponent)}`);

//Question-7:  Write a function that has a local variable and another function that has a global variable. Demonstrate the difference between global and local scope.

let global = 3;

const demoGlobal = () => {
    global = 4;
    console.log(global);
}
console.log(global); // output 3
demoGlobal(); //output 4

const demoLocal = () => {
    let local = 5;
}

//console.log(local); // ReferenceError, local is nor defined

//Question-8:  Write a function that returns another function. The inner function should have access to a variable from the outer function.

const outerFunc = () => {
    let outerVar = 10;
    return innerFunc = () => {
        console.log(outerVar);
    }
}

const inn = outerFunc();

inn(); 

//Question-10: Write two functions, and then compose them into a third function. For example, if f(x) = x + 2 and g(x) = 2x, then the composed function should be h(x) = f(g(x)).

const f = (x) => {
    return x+2;
}

const g = (x) => {
    return 2*x;
}

const fg = (x) => {
    return f(g(x));
}

console.log(fg(5));