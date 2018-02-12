import * as React from "react";

export interface UserProps { id: string; firstName: string; lastName: string; }

// Represent a single user in the list of users render by users.tsx
        
export class User extends React.Component<UserProps, {}> {
    render() {
        return (
            <h3>
                User with key {this.props.id}: {this.props.firstName} and {this.props.lastName}.
            </h3>
        );
    }
}