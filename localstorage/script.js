let username = prompt()
let pword = prompt()
localStorage.setItem('username', username);


let myItem = localStorage.getItem('username');
console.log(myItem)