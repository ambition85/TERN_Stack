import * as React from "react";
import * as ReactDOM from "react-dom";

// Componets we are going to use.
import { Hello } from "./components/hello";

// Root element in DOM where we will mount React.
var example = document.getElementById('index');

const element = (
    <div>
        <p>
            Welcome
        </p>
        <Hello compiler="TypeScript" framework="React" myinfo={example.dataset.myinfo} />
    </div>
);

ReactDOM.render(
    element,
    example
);
