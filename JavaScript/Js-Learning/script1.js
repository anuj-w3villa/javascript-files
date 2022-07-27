async function getData() {
    console.log("Inside Function");
    const response = await fetch('https://api.github.com/users')
    console.log("before resolved");
    const users = await response.json();
    console.log("users resolved");
    return users;

}
let a = getData();
console.log("calling Anuj");
console.log(a);
a.then(data => console.log(data))
console.log("last line of js fie")