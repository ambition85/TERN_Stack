// Notes:
// I can add an attribte that is not required client side.
// But if I remove an attribute that is, the compiler detects this; very useful.
// So this is like having client side view objects and server side data objects giving a separation between the layers.
//
// Have one class per file and define as export default so import in other modules can use this class using any convenient name.
//
//import * as Sequelize from "sequelize";
//export default class User extends Sequelize.Model {
import ModelBase from "./base"

export default class User extends ModelBase {
//    public id: string;
    public firstName: string;
    public lastName: string;//<= comment this out and of course the assignment in the constructor to see what the compiler does.
    // Required servser side but not for rendering
    public someOtherValue: string;

    // timestamps!
//    public readonly createdAt!: Date;
//    public readonly updatedAt!: Date;

    constructor(id: number, firstName: string, lastName: string) {
        super(id);
//        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

/*
User.init({
    id: {
      type: Sequelize.DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: new Sequelize.DataTypes.STRING(128),
      allowNull: false,
    },
    preferredName: {
      type: new Sequelize.DataTypes.STRING(128),
      allowNull: true
    }
  }, {
    tableName: 'users',
    sequelize: db, // this bit is important
  });
*/