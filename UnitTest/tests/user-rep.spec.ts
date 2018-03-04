import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from 'chai';
import UserRep from "../../Web/server/repository/user.rep";

// Alternatie syntax using mocha typescript.
@suite('User repository')
class UserRepTests {
    @test('should return at least one user')
    test1() {
        console.log("Hello from user rep test");

        const userRep: UserRep = new UserRep();

        const users = userRep.read();

        const numUsers = users.length;

        console.log('Number of users retured by user rep: %i', numUsers);

        expect(numUsers).above(0, 'Did not get any users returned.');
    }
}
