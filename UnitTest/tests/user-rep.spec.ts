import UserRep from "../../Web/server/repository/user.rep";
import { expect } from 'chai';
import 'mocha';

describe('User repository function', () => {

    it('should return at least one user', () => {
        console.log("Hello from user rep test");

        const userRep: UserRep = new UserRep();

        const users = userRep.read();

        const numUsers = users.length;

        console.log('Number of users retured by user rep: %i', numUsers);

        expect(numUsers).above(0, 'Did not get any users returned.');
    });
});
