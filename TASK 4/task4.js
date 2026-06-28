let username = "Kirubakar";
let password = "2026";

let enteredUsername = prompt("Enter Username:");
let enteredPassword = prompt("Enter Password:");

let result =
    (enteredUsername === username &&
        enteredPassword === password)
        ? "Login Success"
        : "Invalid Credentials";

console.log(result);