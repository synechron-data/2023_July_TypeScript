// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// class Person implements IPerson {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }
// }

// let p1: IPerson = new Person("Manish", 30);
// console.log(p1.greet("Hi"));

// let p2: IPerson = new Person("Abhijeet", 40);
// console.log(p2.greet("Hi"));

// ------------------------------------------------- Multiple Interface Implementations
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// class Person implements IPerson, IEmployee {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }
// }

// let p1: Person = new Person("Manish", 40);
// console.log(p1.greet("Hi"));
// console.log(p1.doWork());

// ------------------------------------------------- Interface Extraction
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee {
//     doWork(): string;
// }

// interface ICustomer {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }

//     doShopping(): string {
//         return "Shopping Online";
//     }
// }

// // let p1: Person = new Person("Manish", 40);
// // console.log(p1.greet("Hi"));
// // console.log(p1.doWork());
// // console.log(p1.doShopping());

// // Interface Extraction
// let p1: IPerson = new Person("Manish", 40);
// console.log(p1.greet("Hi"));

// let p2: IEmployee = new Person("Manish", 40);
// console.log(p2.doWork());

// let p3: ICustomer = new Person("Manish", 40);
// console.log(p3.doShopping());

// ------------------------------------------------- Interface Extension - Interface can extend other Interface(s)
// interface IPerson {
//     name: string;
//     age: number;
//     greet(message: string): string;
// }

// interface IEmployee extends IPerson {
//     doWork(): string;
// }

// interface ICustomer extends IPerson {
//     doShopping(): string;
// }

// class Person implements IPerson, IEmployee, ICustomer {
//     constructor(public name: string, public age: number) { }

//     greet(message: string): string {
//         return "Hello";
//     }

//     doWork(): string {
//         return "I am learning TypeScript";
//     }

//     doShopping(): string {
//         return "I am Shopping Online";
//     }
// }

// let p2: IEmployee = new Person("Manish", 40);
// console.log(p2.greet("Hi"));
// console.log(p2.doWork());

// let p3: ICustomer = new Person("Manish", 40);
// console.log(p3.greet("Hi"));
// console.log(p3.doShopping());

// --------------------------------------------------- Interface can extend from class(es)

class Control {
    focus(): string {
        return "The control is in focus";
    }
}

class SelectableControl {
    select(): string {
        return "The control is selected";
    }
}

class Button { }
interface Button extends Control, SelectableControl { }

applyMixins(Button, [Control, SelectableControl])

const button = new Button();
console.log(button.focus());
console.log(button.select());

function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            Object.defineProperty(
                derivedCtor.prototype,
                name,
                Object.getOwnPropertyDescriptor(baseCtor.prototype, name) || Object.create(null)
            );
        })
    });
}

// By using mixins, you can easily extend classes with additional functionality without needing to modify the class's inheritance hierarchy. 
// This approach promotes code reuse and allows you to compose classes with different mixins to create customized behavior.