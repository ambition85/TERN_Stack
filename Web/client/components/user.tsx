import * as React from "react";
//import Axios from "axios";
//import CUser from "../../server/models/user";

export interface UserProps {
    key: any;
    id: number;
    firstName: string;
    lastName: string;
    removeUserClick: any;
}

// Represent a single user in the list of users render by users.tsx

export class User extends React.Component<UserProps, {}> {

    constructor(props: UserProps) {
        super(props);
        console.log("Contructor: User id: " + props.id);
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            User with key 3: {this.props.id}: {this.props.firstName} and {this.props.lastName}.
                        </h3>
                        <br />
                        <button className="btn btn-danger" onClick={(e)=>this.props.removeUserClick(this.props.id)}>Remove</button>
                    </div>
                </div>
                {/* TODO use styling to create border around a card */}
                <br/>
            </div>
        );
    }
}