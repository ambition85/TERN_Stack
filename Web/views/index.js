"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var layout_1 = require("../views/layout");
var Index = /** @class */ (function (_super) {
    __extends(Index, _super);
    function Index() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Another method in the React component.
    Index.prototype.hello = function () {
        return "hello marco I'm here";
    };
    Index.prototype.render = function () {
        console.log("I'm here: " + this.props.myinfo);
        return (React.createElement("div", null,
            React.createElement(layout_1.Layout, { title: this.props.title },
                React.createElement("h2", null, "Home"),
                React.createElement("div", { id: 'index', "data-myinfo": this.props.myinfo }),
                React.createElement("a", { href: "./users" }, "Goto Users")),
            React.createElement("script", { src: "./javascripts/index-bundle.js" })));
    };
    return Index;
}(React.Component));
exports.Index = Index;
//# sourceMappingURL=index.js.map