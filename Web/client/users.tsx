import * as React from "react";
import * as ReactDOM from "react-dom";

// Componets we are going to use.
import { Users } from "./components/users";

// Root element in DOM where we will mount React.
var users = document.getElementById('users');

console.log("In users.tsx");
console.log('=> User list as string: ' + users.dataset.users);

// Convert back to JSON object.
var userList = JSON.parse(users.dataset.users);

console.log('=> User list first object key: ' + userList[0].id);
console.log('=> User list first object first name: ' + userList[0].firstName);

const element = (
    <div>
        <p>
            Here is a list of users
        </p>
        <p>
            {users.dataset.users}
        </p>
        {/* Now we are on the client side we can pass as JSON object */}
        <Users users={userList} />
    </div>
);

ReactDOM.render(
    element,
    users
);
