let employees = [
    {
        name: "sankar",
        id: 101
    },
    {
        name: "monish",
        id: 102
    },
    {
        name: "saffron",
        id: 103
    }
];

let newArray = employees.map((c, i, t) => {
    return c.id;
});

newArray.forEach((c, i, t) => {
    console.log(c);
});