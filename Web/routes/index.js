"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * GET home page.
 */
var express = require("express");
//import * as express from "express";
var router = express.Router();
router.get('/', function (req, res) {
    res.render('index', { title: 'Home', myinfo: 'This is myInfo' });
});
router.get('/users', function (req, res) {
    console.log("Going to render users passing in a list of users that I will later get from a datasource.");
    // TODO get from data source
    var userList = [
        {
            id: "1",
            firstName: "Marco",
            lastName: "Christoforou"
        },
        {
            id: "2",
            firstName: "Lisa",
            lastName: "Wood"
        }
    ];
    console.log('First user key: ' + userList[0].id);
    console.log('First user first name: ' + userList[0].firstName);
    res.render('users', { title: 'Users', users: userList });
});
exports.default = router;
//# sourceMappingURL=index.js.map