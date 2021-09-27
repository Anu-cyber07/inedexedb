"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_localstorage_1 = require("node-localstorage");
var localStorage = new node_localstorage_1.LocalStorage('./scratch');
console.log(localStorage.getItem('Name'));
console.log(localStorage.getItem('email'));
