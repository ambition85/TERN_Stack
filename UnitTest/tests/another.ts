import { suite, test, slow, timeout } from "mocha-typescript";
// Using assert here, rather than Chai.
import assert = require('assert');
import 'mocha';

@suite('Test Suite 1')
class YetAnother {
    @test('Test A')
    testA() {
        assert.ok(true, "This shouldn't fail");
    }

//    @test('Test B')
//    testB() {
//        assert.ok(1 === 1, "This shouldn't fail");
//        assert.ok(false, "This should fail");
//    }
}
