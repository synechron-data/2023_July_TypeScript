// function hello() {
//     console.log("Hello World!");
// }

// var r = hello();
// console.log(r);
// console.log(typeof r);

// var r1: undefined;
// // r1 = 10;        // Type '10' is not assignable to type 'undefined'.
// r1 = undefined;
// r1 = void 0;
// console.log(r1);

// var r2: void;
// // r2 = 10;        // Type 'number' is not assignable to type 'void'.
// r2 = undefined;
// r2 = void 0;
// console.log(r2);

// var r3: never;
// // r3 = 10;                // Type 'number' is not assignable to type 'never'
// // r3 = undefined;         // Type 'undefined' is not assignable to type 'never'
// // r3 = void 0;            // Type 'undefined' is not assignable to type 'never'
// console.log(r3);

// var r4: any;
// console.log(r4.trim());         // Runtime Error

// var r5: unknown;
// console.log(r5.trim());         // Property 'trim' does not exist on type 'unknown'.

// JAVASCRIPT - undefined / void
// TYPESCRIPT - any / unknown / never

// -------------------------------------------------

// function iterate() {
//     let i = 1;
//     while(true) {
//         console.log(i++);
//     }
// }

// never in TypeScript is for expressing scenarios where certain values or behaviors are expected to never occur. 
// function iterate(): never {
//     let i = 1;
//     while (true) {
//         console.log(i++);
//     }
// }

// iterate();
// console.log("Last Line in the file...");

// Write a function to log a message passed and throw exception to terminate the execution

// var app: any;

// app.get('/index', (req: any, res: any) => {
//     try {
//         // Database Call
//     } catch (err) {
//         logAndTerminate(err, req, res);
//         console.log("Some Code to run after I send the response");
//     }
// });

// function logAndTerminate(err: any, req: any, res: any): never {
//     console.log(err);
//     res.send("Something went wrong. Please try again later!");
//     throw new Error("Something went wrong. Please try again later!");
// }

// ------------------------------------------------- 

// Funtion Declaration
function add1(x: number, y: number): number {
    return x + y;
}

// Function Expression
const add2 = function (x: number, y: number): number {
    return x + y;
}

let add3: (a: number, b: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
};

let add4: (a: number, b: number) => number;
add4 = function (x, y) {
    return x + y;
};

// Multiline Lambdas
let add5: (a: number, b: number) => number;
add5 = (x, y) => {
    return x + y;
};

// Singleline Lambdas
let add6: (a: number, b: number) => number;
add6 = (x, y) => x + y;

console.log(add1(2, 3));
console.log(add2(2, 3));
console.log(add3(2, 3));
console.log(add4(2, 3));
console.log(add5(2, 3));
console.log(add6(2, 3));