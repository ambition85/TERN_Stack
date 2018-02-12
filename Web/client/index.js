"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
// Componets we are going to use.
var Hello_1 = require("./components/Hello");
// Root element in DOM where we will mount React.
var example = document.getElementById('index');
var element = (React.createElement("div", null,
    React.createElement("p", null, "Welcome"),
    React.createElement(Hello_1.Hello, { compiler: "TypeScript", framework: "React", myinfo: example.dataset.myinfo })));
ReactDOM.render(element, example);
//# sourceMappingURL=index.js.map