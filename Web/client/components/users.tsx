import * as React from "react";

// NOTE: An alternative here is to import * as User from... then use User.UserProps and User.User in the HTML.
import { User, UserProps } from "./user";

// A array of UserProps is required
export interface UsersProps {
    users: UserProps[]
}

// Represent a list of users on the UI using the user component

export class Users extends React.Component<UsersProps, {}> {

    constructor(props) {
        super(props);
        console.log("Contructor: Users");
    }

    render() {

        // Generate an array of user elements.
        const userList = this.props.users.map((user) => {
            return (
                <User key={user.id} id={user.id} firstName={user.firstName} lastName={user.lastName}>
                </User>
            );
        })
        

        return (
            <div>
                {userList}
            </div>
        );
    }
}
