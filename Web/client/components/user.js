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
var axios_1 = require("axios");
// Represent a single user in the list of users render by users.tsx
var User = /** @class */ (function (_super) {
    __extends(User, _super);
    function User(props) {
        var _this = _super.call(this, props) || this;
        console.log("Contructor: User id: " + props.id);
        return _this;
    }
    User.prototype.removeUserClick = function (e) {
        e.preventDefault();
        console.log("Remove user click. id: " + this.props.id);
        axios_1.default
            .delete('./api/user/' + this.props.id)
            .then(function (response) {
            console.log("Delete responsex: " + JSON.stringify(response.data));
        })
            .catch(function (error) {
            console.log("Delete error: " + error);
            throw error;
        });
    };
    User.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", null,
            React.createElement("div", { className: "card" },
                React.createElement("div", { className: "card-body" },
                    React.createElement("h3", { className: "card-title" },
                        "User with key ",
                        this.props.id,
                        ": ",
                        this.props.firstName,
                        " and ",
                        this.props.lastName,
                        "."),
                    React.createElement("br", null),
                    React.createElement("button", { className: "btn btn-danger", onClick: function (e) { return _this.removeUserClick(e); } }, "Remove"))),
            React.createElement("br", null)));
    };
    return User;
}(React.Component));
exports.User = User;
//# sourceMappingURL=user.js.map