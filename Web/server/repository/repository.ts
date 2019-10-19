/*
 * By using the factory pattern I can centralise the user of different data sources, say for testing.
 */
import * as Db from "sequelize";
import UserRep from "./user.rep";
import ModelBase from "../models/base";

export interface Interface {
    create(entity:ModelBase);
    read();
    update();
    delete(id: string);
}

export enum Type {
    USER
}

export class Factory  {
    private static dbConnection: Db.Sequelize;

    static create(type:Type): Interface {

        Factory.dbConnection = new Db.Sequelize('tern', 'postgres', 'mysecretpassword', {
//            host: '172.17.0.3',
            host: 'db',
            dialect: 'postgres'
        });

        Factory.dbConnection
            .authenticate()
            .then(() => {
                console.log('Connection has been established successfully.');
            })
            .catch(err => {
                console.error('Unable to connect to the database:', err);
            });

        let rep: Interface;

        if (type === Type.USER) {
            console.log("=> Inistantiate repository type of user");
            rep = new UserRep(Factory.dbConnection);
        } else {
            console.log("=> Repository type unknown");
        }

        return rep;
    }
}