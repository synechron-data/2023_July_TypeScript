// Variables created in TypeScript are optionally typesafe
// Untyped Variable - Not TypeSafe, we will not get any intellisense on an untyped variable (any)
// var data;
// data = 10;
// data = "Manish";

// var data: any;
// data = 10;
// data = "Manish";

// Impilicitly Typed Variable - TypeSafe, we will get intellisense on an implicitly typed variable
// var data = 10;
// // data = "Manish"; // Error: Type 'string' is not assignable to type 'number'.

// var ename = "Manish";
// ename = 10; // Error: Type 'number' is not assignable to type 'string'.

// Explicitly Typed Variable - TypeSafe, we will get intellisense on an explicitly typed variable
// var age: number;
// age = 20;
// // age = "Manish"; // Error: Type 'string' is not assignable to type 'number'.

// Function to add 2 numbers
// function add(x, y) {
//     return x + y;
// }

// function add(x: any, y: any) {
//     return x + y;
// }

function add(x: number, y: number) {
    return x + y;
}

console.log(add(2, 3));
// console.log(add(2, "abc"));
// console.log(add("abc", "xyz"));

// number / string / boolean / undefined / array / object / Date / RegExp / Function / void
// All the new types which are supported by the latest version of ECMASCRIPT
// Lefthand side of assignment operator, all JS Types can be used (Declaration)

var a: Array<number>;
var s: Symbol;
var p: Promise<string>;

// Righthand side of assignment operator, API's (Functions or Types) will come
// If you want to use any API, You can only use them with proper configuration
// Based on target in tsconfig.json
// And lib section configured in your tsconfig.json

a = new Array<number>();
s = Symbol("Hello");
p = new Promise<string>((resolve, reject) => { });

// BROWSER API (lib => DOM) = All HTML 5 API's
// console
// document
// navigator
// sessionStorage
// localStorage
// screen

// VS Code gives you intellisense using d.ts files (Type Definition Files)