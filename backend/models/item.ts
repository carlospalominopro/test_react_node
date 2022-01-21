"use strict";

import { Model, UUIDV4 } from "sequelize";

interface ItemAttributes {
  id: string;
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

module.exports = (sequelize: any, DataTypes: any) => {
  class Item extends Model<ItemAttributes> implements ItemAttributes {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    id!: string;
    title!: string;
    photo!: string;
    description!: string;
    shortDescription!: string;
    static associate(models: any) {
      // define association here
    }
  }
  Item.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      photo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shortDescription: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Item",
      tableName: "items",
      timestamps : false
    }
  );
  return Item;
};
