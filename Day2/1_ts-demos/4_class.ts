// class Employee {
//     // Data Properties
//     private _name: string;

//     // Multiple constructor implementations are not allowed.
//     // constructor() { 
//     //     this._name = "";
//     // }

//     constructor(name = "") {
//         this._name = name;
//     }

//     getName(): string {
//         return this._name;
//     }

//     setName(value: string): void {
//         this._name = value;
//     }

    // Never use function expressions to create member functions, it will increase the memory usage
    getName = function (): string {
        return this._name;
    }

    setName = function (value: string): void {
        this._name = value;
    }

//     // Never use Lambdas to create member functions, it will increase the memory usage
//     // getName = () => {
//     //     return this._name;
//     // }

//     // setName = (value: string) => {
//     //     this._name = value;
//     // }
// }

// // let e1 = new Employee();
// let e1 = new Employee("Manish");
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// ---------------------------------------------------------------------------- Strict Mode

// class Employee {
//     // private _name: string;

//     // constructor(name = "") {
//     //     this._name = name;
//     // }

//     private _name: string = "";         // Required Property with Default Value
//     private _age?: number;              // Optional Property
//     private _city!: string;             // Switch of Checks for this property

//     getName(): string {
//         return this._name.toUpperCase();
//     }

//     setName(value: string): void {
//         this._name = value;
//     }

//     // getAge() {
//     //     if (this._age)
//     //         return this._age.toFixed();
//     //     else
//     //         return this._age;
//     // }

//     getAge() {
//         return this._age?.toFixed();
//     }

//     getCity() { 
//         return this._city.toUpperCase();
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// e1.setName("Abhijeet");
// console.log(e1.getName());

// ------------------------------------------------------------ Using Accessor and Mutator Methods
// class Employee {
//     // Data Property
//     private _name: string;
//     private _age?: number | undefined;

//     constructor(name = "na") {
//         this._name = name;
//     }

//     getName() {
//         return this._name.toUpperCase();
//     }

//     setName(value: string) {
//         this._name = value;
//     }

//     getAge() {
//         return this._age?.toFixed();
//     }

//     setAge(value: number | undefined) {
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.getName());
// console.log(e1.getAge());
// e1.setName("Abhijeet");
// e1.setAge(39);
// console.log(e1.getName());
// console.log(e1.getAge());

// ---------------------------------------------------------------------- Using Accessor Properties

// class Employee {
//     // Data Property
//     private _name: string;
//     private _age?: number | undefined;

//     constructor(name = "na") {
//         this._name = name;
//     }

//     get Name() {
//         return this._name.toUpperCase();
//     }

//     set Name(value: string) {
//         this._name = value;
//     }

//     get Age() {
//         return this._age;
//     }

//     set Age(value: number | undefined) {
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Name = "Abhijeet";
// e1.Age = 39;
// console.log(e1.Name);
// console.log(e1.Age);

// ---------------------------------------------------------------------- Parameter Property / Parameter Members
// Parameter Property / Parameter Member let us create and initialize member variables in one place. 
// It is a shorthand for creating member variables.

// class Employee {
//     // private _name: string;
//     // private _age: number;

//     // constructor(name = "na", age = 0) {
//     //     this._name = name;
//     //     this._age = age;
//     // }

//     constructor(private _name = "na", private _age = 0) { }

//     get Name() {
//         return this._name.toUpperCase();
//     }

//     set Name(value: string) {
//         this._name = value;
//     }

//     get Age() {
//         return this._age;
//     }

//     set Age(value: number) {
//         this._age = value;
//     }
// }

// let e1 = new Employee();
// console.log(e1.Name);
// console.log(e1.Age);
// e1.Name = "Abhijeet";
// e1.Age = 39;
// console.log(e1.Name);
// console.log(e1.Age);

// -------------------------------------------------------------------------

// Create a BankAccount Class with bankName and accName as data members and create Properties to access
// the data outside using instance.

// class BankAccount {
//     constructor(private _accName: string, private _bankName: string, ) { }

//     get BankName() {
//         return this._bankName;
//     }

//     set BankName(value: string) {
//         this._bankName = value;
//     }

//     get AccountHolderName() {
//         return this._accName;
//     }
// }

// var a1 = new BankAccount("Manish", "ICICI");
// console.log(`Bank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// var a2 = new BankAccount("Abhijeet", "ICICI");
// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// a1.BankName = "HDFC";

// console.log("\nAfter Updating the BankName");
// console.log(`Bank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// ------------------------------------------------------------------------- Static (Class) Members

// class BankAccount {
//     // private static _bankName: string
//     private static _bankName: string = "ICICI";

//     constructor(private _accName: string ) { }

//     get BankName() {
//         return BankAccount._bankName;
//     }

//     static set BankName(value: string) {
//         BankAccount._bankName = value;
//     }

//     get AccountHolderName() {
//         return this._accName;
//     }
// }

// var a1 = new BankAccount("Manish");
// console.log(`Bank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// var a2 = new BankAccount("Abhijeet");
// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// BankAccount.BankName = "HDFC";

// console.log("\nAfter Updating the BankName");
// console.log(`Bank Name: ${a1.BankName}`);
// console.log(`Account Holder Name: ${a1.AccountHolderName}`);

// console.log(`\nBank Name: ${a2.BankName}`);
// console.log(`Account Holder Name: ${a2.AccountHolderName}`);

// ------------------------------------------------------------------------- Readonly Members

class BankAccount {
    private static _bankName: string = "ICICI";

    constructor(private readonly _accNumber: number, private _accName: string) { }

    get BankName() {
        return BankAccount._bankName;
    }

    static set BankName(value: string) {
        BankAccount._bankName = value;
    }

    get AccountNumber(): number {
        // this._accNumber = 1000;                     // Cannot assign to '_accNumber' because it is a read-only property.
        return this._accNumber;
    }

    get AccountHolderName() {
        return this._accName;
    }
}

var a1 = new BankAccount(1, "Manish");
console.log(`Bank Name: ${a1.BankName}`);
console.log(`Account Number: ${a1.AccountNumber}`);
console.log(`Account Holder Name: ${a1.AccountHolderName}`);

var a2 = new BankAccount(2, "Abhijeet");
console.log(`\nBank Name: ${a2.BankName}`);
console.log(`Account Number: ${a2.AccountNumber}`);
console.log(`Account Holder Name: ${a2.AccountHolderName}`);