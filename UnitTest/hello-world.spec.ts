import UserRep from "../Web/server/repository/user.rep";
import { expect } from 'chai';
import 'mocha';

describe('user repository function', () => {

    it('should return at least one user', () => {
        console.log("Hello from user rep test");

        const userRep: UserRep = new UserRep();

        const users = userRep.read();

        const numUsers = users.length;

        console.log('Number of users retured by user rep: %i', numUsers);

        expect(numUsers).above(0,'Did not get any users returned.');
    });
});

describe('Hello function', () => {


    it('should return hello world', () => {
        console.log("Hello world test");

        const result = 'Hello world!';//hello();
        expect(result).to.equal('Hello world!');
    });

    it('should not return hello world', () => {
        console.log("Not Hello world test");

        const result = 'Hello world!';//hello();
        expect(result).to.not.equal('Hello world!');
    });

});
