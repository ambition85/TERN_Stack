import { suite, test, slow, timeout } from "mocha-typescript";
import { expect } from 'chai';

@suite('Hello function')
class HelloWorldTests {
    @test('should return hello world')
    test1() {
        console.log("Hello world test");

        const result = 'Hello world!';
        expect(result).to.equal('Hello world!');
    }

    @test('should not return hello world')
    test2() {
        console.log("Not Hello world test");

        const result = 'Hello worldx!';//hello();
        expect(result).to.not.equal('Hello world!');
    }
}
