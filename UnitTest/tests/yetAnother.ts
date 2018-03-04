import { suite, test, slow, timeout } from "mocha-typescript";

// Alternatie syntax using mocha typescript.
@suite('Yet another')
class YetAnother {
    @test('typescript test')
    test1() {
        console.log('Hello from mocha-typescript');
    }
}
