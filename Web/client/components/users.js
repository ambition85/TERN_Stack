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
// NOTE: An alternative here is to import * as User from... then use User.UserProps and User.User in the HTML.
var user_1 = require("./user");
// Represent a list of users on the UI using the user component
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users(props) {
        var _this = _super.call(this, props) || this;
        console.log("Contructor: Users");
        return _this;
    }
    Users.prototype.render = function () {
        // Generate an array of user elements.
        var userList = this.props.users.map(function (user) {
            return (React.createElement(user_1.User, { key: user.id, id: user.id, firstName: user.firstName, lastName: user.lastName }));
        });
        return (React.createElement("div", null, userList));
    };
    return Users;
}(React.Component));
exports.Users = Users;
//# sourceMappingURL=users.js.map