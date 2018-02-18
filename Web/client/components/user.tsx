import * as React from "react";
import Axios from "axios";
import CUser from "../../server/models/user";

export interface UserProps {
    id: string;
    firstName: string;
    lastName: string;
}

// Represent a single user in the list of users render by users.tsx

export class User extends React.Component<UserProps, {}> {

    constructor(props: UserProps) {
        super(props);
        console.log("Contructor: User id: " + props.id);
    }

    removeUserClick(e: any) {
        e.preventDefault();
        console.log("Remove user click. id: " + this.props.id);
        Axios
            .delete('./user/' + this.props.id)
            .then((response) => {
                console.log("Delete responsex: " + JSON.stringify(response.data));

            })
            .catch((error) => {
                console.log("Delete error: " + error);
                throw error;
            });
    }

    render() {
        return (
            <div>
                <div className="card">
                    <div className="card-body">
                        <h3 className="card-title">
                            User with key {this.props.id}: {this.props.firstName} and {this.props.lastName}.
                        </h3>
                        <br />
                        <button className="btn btn-danger" onClick={(e)=>this.removeUserClick(e)}>Remove</button>
                    </div>
                </div>
                {/* TODO use styling to create border around a card */}
                <br/>
            </div>
        );
    }
}