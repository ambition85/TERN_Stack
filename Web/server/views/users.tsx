import * as React from "react";
import * as ReactDOM from "react-dom";

import { LayoutProps, Layout } from "./layout";

export interface StartProps extends LayoutProps {
    users: any;
}

export class Users extends React.Component<StartProps,{}> {
    render() {
        console.log("Rendering Users on server");

        console.log('=> First user first name: ' + this.props.users[0].firstName);

        // Convert to string so we can pass to client side
        let userList = JSON.stringify(this.props.users);

        return (
            <div>
                <Layout title={this.props.title}>
                    <h2>
                        Users
                    </h2>

                    {/* Mount React on client side passing through the list of users.*/}
                    <div id='users' data-users={userList}></div>

                </Layout>
                {/* These paths are relaive to the public(static) folder defined in Express middleware in app.tsx */}
                <script src="./javascripts/users-bundle.js" />
            </div>
        );
    }
}