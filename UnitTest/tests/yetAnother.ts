import { suite, test, slow, timeout } from "mocha-typescript";

// ALternatie syntax using mocha typescript.
@suite
class Two {
    @test
    method() {
        console.log('Hello from mocha-typescript');
    }
}