import * as React from "react";

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export interface HelloProps { compiler: string; framework: string; myinfo:string }

export class Hello extends React.Component<HelloProps, {}> {
    render() {

        return (
            <h3>
                Hello from {this.props.compiler} and {this.props.framework} and myinfo is: {this.props.myinfo} !
            </h3>
        );
    }
}