/*
 * By using the factory pattern I can centralise the user of diffrerent data sources say for testing.
 */
import UserRep from "./user.rep";

export interface Interface {
    create();
    read();
    update();
    delete(id: string);
}

export enum Type {
    USER
}

export class Factory  {

    static create(type:Type): Interface {

        let rep: Interface;

        if (type === Type.USER) {
            console.log("=> Repositry type of user");
            rep = new UserRep();
        } else {
            console.log("=> Repository type unknown");
        }

        return rep;
    }
}