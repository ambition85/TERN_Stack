import { binding, given, when, then } from "cucumber-tsflow";
import * as assert from 'assert';

@binding()
class MathsSteps {
    private computedResult: number;

    @given(/I start with ([0-9]*)/)
    public iStartWith(num: string): void {
        this.computedResult = parseInt(num);
    }

    @when(/I add ([0-9]*)/)
    public iAdd(num: string): void {
        // TODO specify num as int does not work, it always seem to be treated as a string which caused the plus to concatonate.
        this.computedResult = this.computedResult+parseInt(num);
    }

    @then(/I get the result ([0-9]*)/)
    public iGetTheResult(num: string): void {
        // TODO format output with actual and expected output.
        // TODO is Chai nicer?
        assert.equal(this.computedResult, num, 'Computed result is not the same as expected result');
    }
}

export = MathsSteps;