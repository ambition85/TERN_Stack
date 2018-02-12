import * as React from "react";

import { User, UserProps } from "./user";

export interface UsersProps { users: UserProps[] }

// Represent a list of users on the UI using the user component

export class Users extends React.Component<UsersProps, {}> {

    constructor(props) {
        super(props);
        console.log("Contructor: Users");
    }

    render() {
        
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
