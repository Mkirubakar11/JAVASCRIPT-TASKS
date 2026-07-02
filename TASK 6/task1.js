let employees = [
    {
        name: "saffron",
        id: 101,
        salary: 30000
    },
    {
        name: "vadivel",
        id: 102,
        salary: 60000
    },
    {
        name: "jaan",
        id: 103,
        salary: 45000
    }
];

employees.sort((c, i) => {
    return i.salary - c.salary;
});

console.log("Highest Salary :", employees[0].salary);
console.log("Employee Name :", employees[0].name);