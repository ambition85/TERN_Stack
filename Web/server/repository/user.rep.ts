import User from "../models/user"; // Business Model
import * as UserDb from "../../database/models/user"; // Db Model
import ModelBase from "../models/base";
import * as Repository from "../repository/repository";
import * as Db from "sequelize";

export default class UserRep implements Repository.Interface {

    //users: User[];
    usersTable: any;
    //dbConnection: Sequelize;

    constructor(dbConnection:Db.Sequelize) {
        //this.dbConnection=dbConnection;

        // Define the table. Note, it automatically pluralises the name.
        // We reuse the user db model that is also used to generate the database.
        this.usersTable=UserDb(dbConnection,Db.DataTypes);
        /*
        this.usersTable=
            dbConnection
            .define('user', {
                // attributes
                firstName: {
                    type: Db.DataTypes.STRING,
                    allowNull: false
                },
                lastName: {
                    type: Db.DataTypes.STRING
                    // allowNull defaults to true
                }
            }, {
            // options
            });
        */

        /*
        // NOTE: Now done in database migrations.
        // Create, populate the table.
        // Note: using `force: true` will drop the table if it already exists
        this.usersTable
            .sync({ force: true })
            .then(() => {
                let user: User = new User(9,"joe2", "bloggs2");

                this.create(user);
            });
        */
    }

    create(user:User) {
        // Map user business model into database.
        this.usersTable.create({
            firstName: user.firstName,
            lastName: user.lastName
        }).then(newUser => {
            console.log("CREATE SUCCESSFUL");
            // Update the id with the one from the database.
            user.id=newUser.id;
        });
    }

    read() {

        // Pass back a promise so caller can take action once database interaction is complete.
        const promise = new Promise((resolve, reject) => {
            this.usersTable.findAll().then(users => {
                console.log("All users:", JSON.stringify(users, null, 4));

                // Map user database model to user business model.
                const userList=
                users.map((user) => {
                    return new User(user.id,user.firstName,user.lastName);                    
                });

                console.log("All users again:",JSON.stringify(userList));
                resolve(userList);
            });
        });

        // Return the promise so the response can be returned once the db query
        // has completed.
        // Essentially this is like a callback, just nicer.
        // Could have also passed through the response object but I want each
        // class/module to only know what it needs to know. (Single point of responsibility)
        return promise;
    }

    update() {

    }

    delete(id: string) {
        console.log("Deleting user with id: " + id);

    }
}
