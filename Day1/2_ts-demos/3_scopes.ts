// Global scope (If Module is disabled in tsconfig.json)
// NameSpace Scope
// Module Scope (If Module is enabled in tsconfig.json)
// Function Scope - Local Scope
// Block Scope - Only if we use, let and const keywords

// var i = 20;

// namespace Scopes {
//     var i = 20;
// }

// namespace helps you create Module Pattern in JS
// namespace Scopes {
//     export var i = 20;
// }

// namespace Scopes {
//     export var i = 20;
// }

// namespace Usage {
//     console.log(Scopes.i);
// }

// namespace VarKeyword { 
//     // var i = 20;
//     // var i = 30;
//     // console.log(i);

//     // var j = 20;
//     // // var j = "abc";                  // Subsequent variable declarations must have the same type.
//     // console.log(j);

//     // var Supports Hoisting - Moving Declarations to the top
//     // a1 = "Hello";
//     // console.log(a1);
//     // var a1;

//     // var i = 20;             // Global or Namespace or Module Scope

//     // function test() {
//     //     var i = "Hello";           // Function Scope
//     //     console.log("Inside Function, i is:", i);
//     // }

//     // test();
//     // console.log("Outside Function, i is:", i);

//     // var does not support Block Scoping
//     var i = 100;
//     console.log("Before Block, i is:", i);

//     for(var i = 0; i < 5; i++) {
//         console.log("Inside Block, i is:", i);
//     }

//     console.log("After Block, i is:", i);
// }

// namespace LetKeyword { 
//     // let i = 20;
//     // // let i = 30;             // Cannot redeclare block-scoped variable 'i'.
//     // console.log(i);

//     // Let does not Supports Hoisting - Moving Declarations to the top
//     // a1 = "Hello";
//     // console.log(a1);
//     // let a1;

//     // Let support Block Scoping
//     var i = 100;
//     console.log("Before Block, i is:", i);

//     for(let i = 0; i < 5; i++) {
//         console.log("Inside Block, i is:", i);
//     }

//     console.log("After Block, i is:", i);
// }

namespace ConstKeyword {
    // let j: number;
    // j = 10;
    // j = 20;

    // // const env: string;          // A const declaration must be initialized.

    // const env = "Dev";
    // console.log(env);

    // // env = "Prod";               // Cannot assign to 'env' because it is a constant.
    // // console.log(env);

    // // const env = "Prod";               // Cannot redeclare block-scoped variable 'env'.
    // // console.log("env is:", env);

    // if (true) {
    //     const env = "Prod";               // Cannot assign to 'env' because it is a constant.
    //     console.log("Block Scope, env is:", env);
    // }

    // ----------------------------

    const obj = { id: 1, name: "abc" };
    console.log(obj);

    // obj = { name: "abc" };            // Cannot assign to 'obj' because it is a constant.

    obj.id = 1000;
    console.log(obj);

    delete obj.id;
    console.log(obj);

    // Object.seal(obj);
    // Object.preventExtensions(obj);
    // Object.freeze(obj);
}