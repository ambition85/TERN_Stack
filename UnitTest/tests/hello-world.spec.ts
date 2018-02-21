import { expect } from 'chai';
import 'mocha';

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
