import * as React from "react";
import Axios from "axios";

// Server side objects that we will represent in the UI
import CUser from "../../server/models/user";

// NOTE: An alternative here is to import * as User from... then use User.UserProps and User.User in the HTML.
import { User, UserProps } from "./user";

// A array of UserProps is required
export interface UsersProps {
    users: CUser[]
}

interface UsersState {
    users: CUser[]
}

// Represent a list of users on the UI using the user component

export class Users extends React.Component<UsersProps, UsersState> {
    [x: string]: any;

    constructor(props) {
        super(props);
        this.removeUserClick = this.removeUserClick.bind(this);
        this.state={users:props.users};
        console.log("Contructor: Users");
    }

    removeUserClick(id: number) {
        console.log("Users click"+JSON.stringify(this.state.users));
        console.log("Removed user id: "+id);
        const index = this.state.users.findIndex(x=>x.id===id);
        console.log("Index: "+index);
        if (index>=0) {
            Axios
                .delete('./api/user/' + id)
                .then((response) => {
                    console.log("Delete response: " + JSON.stringify(response.data));
                    this.state.users.splice(index,1)
                
                    this.setState(
                        {
                            users:this.state.users
                        }
                    )
                })
                .catch((error) => {
                    console.log("Delete error: " + error);
                    throw error;
                });            
        }
    }

    render() {

        // Generate an array of user elements.
//        const userList = this.props.users.map((user) => {
        const userList = this.state.users.map((user) => {
            return (
                <User
                    key={user.id}
                    id={user.id}
                    firstName={user.firstName}
                    lastName={user.lastName}
                    removeUserClick={this.removeUserClick}>
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
