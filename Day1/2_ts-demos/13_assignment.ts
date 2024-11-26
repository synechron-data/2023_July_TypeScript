type EmployeeT = {
    id: number,
    name: string,
    city: string
};

var empList: Array<EmployeeT>;

empList = [
    { id: 1, name: "Manish", city: "Pune" },
    { id: 2, name: "Ramakant", city: "Delhi" },
    { id: 3, name: "Abhijeet", city: "Pune" },
    { id: 4, name: "Subodh", city: "Mumbai" },
    { id: 5, name: "Abhishek", city: "Mathura" }
];

var names = empList.map(e => e.name.toUpperCase());

var result = names.includes("MANISH");
console.log(result);

// What should we do to use Array includes method in TypeScript?

const person = { id: 1, name: "Manish", city: "Pune" };
console.log(Object.values(person));

// What should we do to use Object.values method in TypeScript?