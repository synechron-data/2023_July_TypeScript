// In TS, Function Parameters are required and you cannot pass extra arguments to a function
// In TS, Function Parameters are also typesafe, if you donot use 'any' type explicitly

// function hello_ts(name: string): void {
//     console.log("Hello " + name);
// }

// hello_ts("Manish");
// hello_ts(10);       // Argument of type '10' is not assignable to parameter of type 'string'.
// hello_ts();         // Expected 1 arguments, but got 0.
// hello_ts("Abhijeet", "Gole");    // Expected 1 arguments, but got 2.

// ------------------------------------------------- Optional Parameters (?)
// A required parameter cannot follow an optional parameter.
// function Add(x?: number, y?: number): number {
//     if (x === void 0) x = 0;
//     if (y === void 0) y = 0;

//     return x + y;
// }

// console.log(Add(2, 3));
// console.log(Add(2));
// console.log(Add());

// ------------------------------------------------- Default Parameters
// A required parameter cannot follow a default parameter.
function Add(x = 0, y = 0): number {
    return x + y;
}

console.log(Add(2, 3));
console.log(Add(2));
console.log(Add());