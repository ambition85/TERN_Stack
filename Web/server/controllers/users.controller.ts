import User from "../models/user";

export default class UsersController {
    constructor() {

    }

    create() {

    }

    read() {

        let user: User = new User("3", "joe", "bloggs");

        // Return all users.
        // TODO get from data source
        let users = [
            {
                id: "1",
                firstName: "Marco",
                lastName: "Christoforou"
            },
            {
                id: "2",
                firstName: "Lisa",
                lastName: "Wood"
            },
            user
        ];

        return users;
    }

    update() {

    }

    delete(id: string) {
        console.log("Deleting user with id: " + id);

    }
}
