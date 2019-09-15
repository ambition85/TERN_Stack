// Notes:
// I can add an attribte that is not required client side.
// But if I remove an attribute that is, the compiler detects this; very useful.
// So this is like having client side view objects and server side data objects giving a separation between the layers.
//
// Have one class per file and define as export default so import in other modules can use this class using any convenient name.
//
export default class CUser {
    id: string;
    firstName: string;
    lastName: string;//<= comment this out and of course the assignment in the constructor to see what the compiler does.
    // Required servser side but not for rendering
    someOtherValue: string;

    constructor(id: string, firstName: string, lastName: string) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}