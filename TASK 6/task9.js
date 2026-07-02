let employees = [
    {
        name: "Kirubakar",
        salary: 30000
    },
    {
        name: "Roshan",
        salary: 60000
    },
    {
        name: "Cibi",
        salary: 40000
    }
];

let bonus = 5000;

let newArray = employees.map((c, i, t) => {
    return c.name + " : " + (c.salary + bonus);
});

newArray.forEach((c, i, t) => {
    console.log(c);
});