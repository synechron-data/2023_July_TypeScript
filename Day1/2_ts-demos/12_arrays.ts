// // Impicitly Typed Arrays
// var arr1 = [1, 2, 3];
// var arr2 = ["Manish", "Sharma"];
// var arr3 = [1, "Manish", true];

// // Explicitly Typed Arrays
// var arr4: number[];
// arr4 = [1, 2, 3];

// var arr5: Array<number>;
// arr5 = [1, 2, 3];

// var arr6: Array<number> = [1, 2, 3];

// var arr7 = new Array();
// console.log(arr7);
// console.log(arr7.length);

// var arr8 = new Array(3);
// console.log(arr8);
// console.log(arr8.length);

// var arr9 = new Array("Manish");
// console.log(arr9);
// console.log(arr9.length);

// var arr10 = Array.of(10);
// console.log(arr10);
// console.log(arr10.length);

// var arr = [1, 2, 3, 4, 5];

// var arr11 = new Array(arr);
// console.log(arr11);
// console.log(arr11.length);

// var arr12 = Array.from(arr);
// console.log(arr12);
// console.log(arr12.length);

// var arr13 = [...arr];
// console.log(arr13);
// console.log(arr13.length);

// -------------------------------------------- Array of Objects

// var empList: Array<{ id: number, name: string, city: string }>;

// empList = [
//     { id: 1, name: "Manish", city: "Pune" },
//     { id: 2, name: "Mahesh", city: "Mumbai" },
//     { id: 3, name: "Suresh", city: "Nagpur" },
//     { id: 4, name: "Ramesh", city: "Nashik" },
//     { id: 5, name: "Rajesh", city: "Aurangabad" }
// ];

// empList.push({ id: 6, name: "Ramakant", city: "Pune" });
// console.log(empList);

// -------------------------------------------- Type Alias

type Employee = { id: number, name: string, city: string };

// var empList: Array<Employee>;
var empList: Employee[];

empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Mahesh", city: "Mumbai" },
    { id: 3, name: "Suresh", city: "Nagpur" },
    { id: 4, name: "Ramesh", city: "Nashik" },
    { id: 5, name: "Rajesh", city: "Aurangabad" }
];

empList.push({ id: 6, name: "Ramakant", city: "Pune" });
// console.log(empList);

// -------------------------------------------- Array Iteration
// empList.forEach((item, index) => {
//     console.log(`${index}               ${JSON.stringify(item)}`);
// });

// for (let index = 0; index < empList.length; index++) {
//     console.log(`${index}               ${JSON.stringify(empList[index])}`);
// }

// for (const index in empList) {
//     console.log(`${index}               ${JSON.stringify(empList[index])}`);
// }

// for (const item of empList) {
//     console.log(`${JSON.stringify(item)}`);
// }

// for (const item of empList.entries()) {
//     console.log(`${JSON.stringify(item)}`);
// }

// for (const [index, item] of empList.entries()) {
//     console.log(`${index}               ${JSON.stringify(item)}`);
// }

// -------------------------------------------- Array Methods

var r1 = empList.find(e => e.id == 4);
console.log(r1);

var r2 = empList.findIndex(e => e.id == 4);
console.log(r2);

var names = empList.map(e => e.name.toUpperCase());
console.log(names);

var ids = empList.map(e => e.id);
console.log(ids);

var sum = ids.reduce((a, b) => a + b);
console.log(sum);

var cities = empList.map(e => e.city);
console.log(cities);