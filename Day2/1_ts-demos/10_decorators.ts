// class Calculator {
//     add(x: number, y: number) {
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// // I want to log the arguments passed to the method, when we call the methods
// // Where should we write the Code for logging?

// -----------------------------

// class Calculator {
//     add(x: number, y: number) {
//         console.log(`add method called with arguments as ${x} and ${y}`);
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         console.log(`sub method called with arguments as ${x} and ${y}`);
//         return x - y;
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// -----------------------------

// class Calculator {
//     add(x: number, y: number) {
//         log(`add method called with arguments as ${x} and ${y}`);
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         log(`sub method called with arguments as ${x} and ${y}`);
//         return x - y;
//     }
// }

// function log(message: string) {
//     console.log(message);
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// ----------------------------- Higher Order Function

// class Calculator {
//     add(x: number, y: number) {
//         return x + y;
//     }

//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// function logHOF(fnRef: (...items: any[]) => any) {
//     return function (...args: any[]) {
//         console.log(`Function called with arguments as ${args}`);
//         return fnRef(...args);
//     }
// }

// var c = new Calculator();

// const addWithLogging = logHOF(c.add);
// const subWithLogging = logHOF(c.sub);

// console.log(addWithLogging(2, 3));
// console.log(subWithLogging(24, 35));

// ----------------------------- Decorators

// Types of Decorators
// Class Decorator <T extends Function>(target:T) => T | void
// Property Decorator (target: Object, propertyKey: string | symbol) => void;
// Method Decorator <T>(target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<T>) => TypedPropertyDescriptor<T> | void;
// Parameter Decorator (target: Object, propertyKey: string | symbol, parameterIndex: number) => void;

// ----------------------------- Method Decorator

// class Calculator {
//     @log
//     add(x: number, y: number) {
//         return x + y;
//     }

//     @log
//     sub(x: number, y: number) {
//         return x - y;
//     }
// }

// function log<T>(target: T, propertyKey: string, descriptor: PropertyDescriptor) {
//     const originalFnRef = descriptor.value;
//     descriptor.value = function (...args: any[]) {
//         console.log(`${propertyKey} is called with arguments as ${args}`);
//         return originalFnRef(...args);
//     }
// }

// var c = new Calculator();
// console.log(c.add(2, 3));
// console.log(c.sub(24, 35));

// ----------------------------- Class Decorator
// function CityDecorator<T extends { new(...args: any[]): {} }>(target: T) {
//     return class extends target {
//         city = "Pune";
//     }
// }

// @CityDecorator
// class MyPerson {
//     name: string;

//     constructor(n = "NA") {
//         this.name = n;
//     }
// }

// var p = new MyPerson("Manish");
// console.log(JSON.stringify(p));

// ----------------------------- Decorator Factory
function CityDecorator(obj: { cityName: string }) {
    return function <T extends { new(...args: any[]): {} }>(target: T) {
        return class extends target {
            city = obj.cityName;
        }
    }
}

@CityDecorator({
    cityName: "Chennai"
})
class MyPerson {
    name: string;

    constructor(n = "NA") {
        this.name = n;
    }
}

var p = new MyPerson("Manish");
console.log(JSON.stringify(p));

// Angular
// Class Decorator - @Component, @NgModule, @Injectable
// Property Decorator - @Input, @Output
// Method Decorator - @HostListener, @HostBinding
// Parameter Decorator - @Inject, @Optional, @Self, @SkipSelf, @Attribute

function validateProperties(targetProperty: string) {
    return function (target: any, propertyName: string) {
        let _value = target[propertyName];

        const setter = function(newVal: any) {
            if (newVal !== undefined && target[targetProperty] === undefined) {
                throw new Error(`If ${propertyName} is set, ${targetProperty} must also be set.`);
            }

            _value = newVal;
        };

        const getter = function() {
            return _value;
        };

        if (delete target[propertyName]) {
            Object.defineProperty(target, propertyName, {
                get: getter,
                set: setter,
                enumerable: true,
                configurable: true
            });
        }
    }
}


// class MyClass {
//     @validateProperties('propB')
//     public propA?: number;

//     @validateProperties('propA')
//     public propB?: string;
// }

// const instance = new MyClass();

// try {
//     instance.propA = 5;  // Throws error: If propA is set, propB must also be set.
// } catch (error: any) {
//     console.error(error.message);
// }

// instance.propB = 'Hello';
// // instance.propA = 5;  // No error since propB is already set.

type Props = 
  | { propA: number, propB: string }
  | { propA?: undefined, propB?: undefined };

class MyClass {
    public propA?: number;
    public propB?: string;

    private constructor() {} // make the constructor private so it can't be called directly

    static create(data: Props): MyClass {
        const instance = new MyClass();
        instance.propA = data.propA;
        instance.propB = data.propB;
        return instance;
    }
}

const instance1 = MyClass.create({}); // OK
const instance2 = MyClass.create({ propA: 5, propB: "Hello" }); // OK
const instance3 = MyClass.create({ propA: 5, propB: "Hello" });
