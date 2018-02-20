import User from "../models/user";
import * as Repository from "../repository/repository";

export default class UserRep implements Repository.Interface {

    users: User[];

    constructor() {
        let user: User = new User("3", "joe", "bloggs");

        // Return all users.
        // TODO get from data source
        this.users = [
        /*
            {
                id: "1",
                firstName: "Marco",
                lastName: "Christoforou"
            }*/
            new User("1", "Marco", "Christoforou")
            ,
        /*
            {
                id: "2",
                firstName: "Lisa",
                lastName: "Wood"
            }*/
            new User("2", "Lisa", "Wood")
            ,
            user
        ];


    }

    create() {

    }

    read() {

        return this.users;
    }

    update() {

    }

    delete(id: string) {
        console.log("Deleting user with id: " + id);

    }
}
