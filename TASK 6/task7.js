let employees = [
    {
        name: "kirubakar",
        id: 101,
        salary: 30000
    },
    {
        name: "Ram",
        id: 102,
        salary: 60000
    },
    {
        name: "Naveen",
        id: 103,
        salary: 50000
    }
];

let totalSalary = employees.reduce((c, i, t) => {
    return c + i.salary;
}, 0);

console.log("Total Salary :", totalSalary);