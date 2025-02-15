// In TypeScript, Rest and Spread can be used with Array and Object type

// ... on Left hand side of assignment (=) operator - Rest
// ... on Right hand side of assignment (=) operator - Spread

// -------------------------------------------------- Array Spread
// var numArr1 = [10, 20, 30, 40, [50, 60]];

// // var numArr2 = numArr1;          // Reference Copy

// var numArr2 = [...numArr1];     // Shallow Copy

// // var numArr2 = JSON.parse(JSON.stringify(numArr1));     // Deep Copy

// numArr2[0] = 1000;
// (numArr2[4] as number[])[0] = 5000;

// console.log("Array 1: ", numArr1);
// console.log("Array 2: ", numArr2);

// -----------------------------------
// var numArr1 = [10, 20, 30];
// var numArr2 = [40, 50, 60];

// var numArr3 = [...numArr1, ...numArr2];

// console.log("Array 1: ", numArr1);
// console.log("Array 2: ", numArr2);
// console.log("Array 3: ", numArr3);

// --------------------------------------------------- Object Spread
// var emp1 = { id: 1, name: "Manish", address: { city: "Pune" } };

// // var emp2 = emp1;        // Reference Copy

// // var emp2 = {
// //     id: emp1.id,
// //     name: emp1.name,
// //     address: emp1.address
// // };          // Shallow Copy

// // var emp2 = Object.assign({}, emp1);     // Shallow Copy
// var emp2 = { ...emp1 };     // Shallow Copy

// // var emp2 = JSON.parse(JSON.stringify(emp1));     // Deep Copy

// emp2.id = 100;
// emp2.address.city = "Mumbai";

// console.log("Employee 1: ", JSON.stringify(emp1));
// console.log("Employee 2: ", JSON.stringify(emp2));

// // ------------------------------------------------- Destructuring Array with Rest
// var numArr1 = [10, 20, 30, 40, 50, 60];

// // Desctructuring Array
// // var x = numArr1[0];
// // var y = numArr1[1];

// // var [x, y] = numArr1;

console.log("x: ", x);
console.log("y: ", y);

// // Desctructuring Array with Rest

// // var [x, y, z] = numArr1;
// var [x, y, ...z] = numArr1;

// console.log("x: ", x);
// console.log("y: ", y);
// console.log("z: ", z);

// --------------------------------------------------------------------------- Object Rest
var emp = { id: 1, ename: "Manish", city: "Pune", state: "MH", pin: 411021 };

// // Destructuring
// var id = emp.id;
// var ename = emp.ename;
// var address = {
//     city: emp.city,
//     state: emp.state,
//     pin: emp.pin
// };

// Desctructuring with Rest
var { id, ename, ...address } = emp;

console.log("Id: ", id);
console.log("Name: ", ename);
console.log("Address: ", address);