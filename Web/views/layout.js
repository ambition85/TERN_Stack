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
var Layout = /** @class */ (function (_super) {
    __extends(Layout, _super);
    function Layout() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Layout.prototype.render = function () {
        return (React.createElement("html", { lang: "en" },
            React.createElement("head", null,
                React.createElement("meta", { charSet: "utf-8" }),
                React.createElement("meta", { name: "viewport", content: "width=device-width, initial-scale=1, shrink-to-fit=no" }),
                React.createElement("link", { rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" }),
                React.createElement("title", null, this.props.title)),
            React.createElement("body", null,
                React.createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
                    React.createElement("button", { className: "navbar-toggler", type: "button", "data-toggle": "collapse", "data-target": "#navbarSupportedContent", "aria-controls": "navbarSupportedContent", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                        React.createElement("span", { className: "navbar-toggler-icon" })),
                    React.createElement("div", { className: "collapse navbar-collapse", id: "navbarSupportedContent" },
                        React.createElement("ul", { className: "navbar-nav mr-auto" },
                            React.createElement("li", { className: "nav-item active" },
                                React.createElement("a", { className: "nav-link", href: "#" },
                                    "Home ",
                                    React.createElement("span", { className: "sr-only" }, "(current)"))),
                            React.createElement("li", { className: "nav-item" },
                                React.createElement("a", { className: "nav-link", href: "#" }, "Link")),
                            React.createElement("li", { className: "nav-item dropdown" },
                                React.createElement("a", { className: "nav-link dropdown-toggle", href: "#", id: "navbarDropdown", role: "button", "data-toggle": "dropdown", "aria-haspopup": "true", "aria-expanded": "false" }, "Dropdown"),
                                React.createElement("div", { className: "dropdown-menu", "aria-labelledby": "navbarDropdown" },
                                    React.createElement("a", { className: "dropdown-item", href: "#" }, "Action"),
                                    React.createElement("a", { className: "dropdown-item", href: "#" }, "Another action"),
                                    React.createElement("div", { className: "dropdown-divider" }),
                                    React.createElement("a", { className: "dropdown-item", href: "#" }, "Something else here"))),
                            React.createElement("li", { className: "nav-item" },
                                React.createElement("a", { className: "nav-link disabled", href: "#" }, "Disabled"))))),
                React.createElement("div", { className: "container-fluid" },
                    React.createElement("h1", null, "My  React Typescript Stack"),
                    this.props.children),
                React.createElement("script", { src: "https://code.jquery.com/jquery-3.2.1.slim.min.js" }),
                React.createElement("script", { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" }),
                React.createElement("script", { src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" }),
                React.createElement("script", { src: "https://unpkg.com/react@16/umd/react.development.js" }),
                React.createElement("script", { src: "https://unpkg.com/react-dom@16/umd/react-dom.development.js" }))));
    };
    return Layout;
}(React.Component));
exports.Layout = Layout;
//# sourceMappingURL=layout.js.map