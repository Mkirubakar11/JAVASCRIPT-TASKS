let employees = [
    {
        name: "Ravi kumar",
        experience: 2
    },
    {
        name: "subburayan",
        experience: 7
    },
    {
        name: "Arunagiri",
        experience: 5
    }
];

let newArray = employees.map((c, i, t) => {
    return c.name;
});

newArray.forEach((c, i, t) => {
    console.log(c);
});