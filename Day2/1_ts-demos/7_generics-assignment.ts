interface IEmployee {
    name: string;
}

class ProjectManager implements IEmployee {
    name: string;

    constructor() {
        this.name = "Project Manager";
    }
}

class Developer implements IEmployee {
    name: string;

    constructor() {
        this.name = "Developer";
    }
}

class Tester implements IEmployee {
    name: string;

    constructor() {
        this.name = "Tester";
    }
}

var factory = (function <T extends IEmployee>() {
    return {
        getEmployee: function (arg: { new(): T }): T {
            return new arg();
        }
    };
})();

// // Change the below implemenation; use Generics
// var factory = (function () {
//     return {
//         getEmployee: function (arg: any): any {
//             return new arg();
//         }
//     };
// })();

console.log(factory.getEmployee(ProjectManager));
console.log(factory.getEmployee(Developer));
console.log(factory.getEmployee(Tester));
// console.log(factory.getEmployee(10));           // Compile Time Error
// console.log(factory.getEmployee("abc"));        // Compile Time Error