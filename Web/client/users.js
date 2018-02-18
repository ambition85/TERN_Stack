"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
// Component we are going to use.
var users_1 = require("./components/users");
// Root element in DOM where we will mount React.
var usersElement = document.getElementById('users');
console.log("In users.tsx");
console.log('=> User list as string: ' + usersElement.dataset.users);
// Convert back to objects.
var users = JSON.parse(usersElement.dataset.users);
console.log('=> User list first object key: ' + users[0].id);
console.log('=> User list first object first name: ' + users[0].firstName);
var element = (React.createElement("div", null,
    React.createElement("p", null, "Here is a list of users"),
    React.createElement("p", null,
        "As a stringx",
        React.createElement("br", null),
        JSON.stringify(users)),
    "As a list of elements",
    React.createElement(users_1.Users, { users: users })));
ReactDOM.render(element, usersElement);
//# sourceMappingURL=users.js.map