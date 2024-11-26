// function hello() {
//     console.log("Hello World");
// }

// // Duplicate function implementation.
// function hello(name) {
//     console.log("Hello " + name);
// }

// hello();
// hello("Manish");

// -------------------------------------------------
function hello(): void;
function hello(name: string): void;

function hello(...args: string[]) {
    if (args.length === 0)
        console.log("Hello World");
    else
        console.log("Hello " + args.join(", "));
} 

hello();
hello("Manish");
// hello("Manish", "Sharma");          // Expected 0-1 arguments, but got 2.