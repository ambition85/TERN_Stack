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
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.render = function () {
        console.log("Rendering Users on server");
        console.log('=> First user first name: ' + this.props.users[0].firstName);
        // Convert to string so we can pass to client side
        var userList = JSON.stringify(this.props.users);
        return (React.createElement("div", null,
            React.createElement(layout_1.Layout, { title: this.props.title },
                React.createElement("h2", null, "Users"),
                React.createElement("div", { id: 'users', "data-users": userList })),
            React.createElement("script", { src: "./javascripts/users-bundle.js" })));
    };
    return Users;
}(React.Component));
exports.Users = Users;
//# sourceMappingURL=users.js.map