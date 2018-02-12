"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
// Componets we are going to use.
var users_1 = require("./components/users");
// Root element in DOM where we will mount React.
var users = document.getElementById('users');
console.log("In users.tsx");
console.log('=> User list as string: ' + users.dataset.users);
// Convert back to JSON object.
var userList = JSON.parse(users.dataset.users);
console.log('=> User list first object key: ' + userList[0].id);
console.log('=> User list first object first name: ' + userList[0].firstName);
var element = (React.createElement("div", null,
    React.createElement("p", null, "Here is a list of users"),
    React.createElement("p", null, users.dataset.users),
    React.createElement(users_1.Users, { users: userList })));
ReactDOM.render(element, users);
//# sourceMappingURL=users.js.map