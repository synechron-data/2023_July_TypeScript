// TypeGuard Array
var dataArr1: (number | string)[];
dataArr1 = [1, "Manish"];
dataArr1 = ["Abhijeet", 2];
dataArr1 = ["Abhijeet", "Manish"];
dataArr1 = [1, 2];
dataArr1 = [1, 2, 3, 4, 5];
dataArr1 = [1, "Manish", "Pune", 411021];

// Tuple - Stores a fixed collection of values of same or varied types, maintaining the sequence
let dataRow: [number, string];
dataRow = [1, "Manish"];
// dataRow = ["Abhijeet", 2];
// dataRow = ["Abhijeet", "Manish"];
// dataRow = [1, 2];
// dataRow = [1, 2, 3, 4, 5];
// dataRow = [1, "Manish", "Pune", 411021];

// -----------------------------------------------------
function insertData1(data: (number | string)[]) {
    console.log(data);
}

function insertData2(data: [number, string]) {
    console.log(data);
}

insertData1([1, "Manish"]);
insertData1(["Abhijeet", 2]);
insertData1(["Abhijeet", "Manish"]);
insertData1([1, 2]);
insertData1([1, 2, 3, 4, 5]);
insertData1([1, "Manish", "Pune", 411021]);

insertData2([1, "Manish"]);