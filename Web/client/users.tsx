import * as React from "react";
import * as ReactDOM from "react-dom";

// Component we are going to use.
import { Users } from "./components/users";
// Server side objects that we will represent in the UI
import User from "../server/models/user";

// Root element in DOM where we will mount React.
var usersElement = document.getElementById('users');

console.log("In users.tsx");
console.log('=> User list as string: ' + usersElement.dataset.users);

// Convert back to objects.
let users:User[] = JSON.parse(usersElement.dataset.users);

console.log('=> User list first object key: ' + users[0].id);
console.log('=> User list first object first name: ' + users[0].firstName);

const element = (
    <div>
        <p>
            Here is a list of users 3
        </p>
        <p>
            As a stringx
            <br />
            {JSON.stringify(users)}
        </p>
        As a list of elements
        {/* Now we are on the client side we can pass as JSON object */}
        <Users users={users} />
    </div>
);

ReactDOM.render(
    element,
    usersElement
);
