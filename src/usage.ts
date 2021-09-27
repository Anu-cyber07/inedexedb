import {LocalStorage} from 'node-localstorage'
var localStorage = new LocalStorage('./scratch');
console.log(localStorage.getItem('Name'))
console.log(localStorage.getItem('email'))