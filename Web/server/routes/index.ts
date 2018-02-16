/*
 * GET home page.
 */
import express = require('express');
//import * as express from "express";

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.render('index', { title: 'Home', myinfo: 'This is myInfo' });
});

router.get('/users', (req: express.Request, res: express.Response) => {
    console.log("Going to render users passing in a list of users that I will later get from a datasource.");

    // TODO get from data source
    let userList = [
        {
            id:"1",
            firstName: "Marco",
            lastName:"Christoforou"
        },
        {
            id: "2",
            firstName: "Lisa",
            lastName:"Wood"
        }
    ];

    console.log('First user key: ' + userList[0].id);
    console.log('First user first name: ' + userList[0].firstName);

    res.render('users', { title: 'Users', users: userList });
});

export default router;