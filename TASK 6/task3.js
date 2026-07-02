let employees = [
    {
        name: "Maddy",
        id: 101,
        salary: 30000
    },
    {
        name: "Kirubakar",
        id: 102,
        salary: 60000
    },
    {
        name: "Arun shan",
        id: 103,
        salary: 45000
    }
];

let bonus = 5000;

let newArray = employees.map((c, i, t) => {
    return c.name + " : " + (c.salary + bonus);
});

newArray.forEach((c, i, t) => {
    console.log(c);
});