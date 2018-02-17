import * as React from "react";
import * as ReactDOM from "react-dom";

import { LayoutProps, Layout } from "./layout";

export interface StartProps extends LayoutProps {
    myinfo: string;
}

export class Index extends React.Component<StartProps, {}> {

    // Another method in the React component.
    hello() {
        return "hello marco I'm here test";
    }

    render() {
        console.log("I'm here: " + this.props.myinfo);
        return (
            <div>
                <Layout title={this.props.title}>                    
                    <h2>
                        Home
                    </h2>

                    {/* Mount React on client side.*/}
                    <div id='index' data-myinfo={this.props.myinfo}></div>

                    <a href="./users">
                        Goto Users
                    </a>
                </Layout>
                <script src="./javascripts/index-bundle.js" />
            </div>
        );
    }
}
