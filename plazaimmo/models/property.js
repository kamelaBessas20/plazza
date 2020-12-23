'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Property extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Property.belongsTo(models.Realtor)
      Property.belongsTo(models.Bayer)
    }
  };
  Property.init({
    description: DataTypes.STRING,
    price: DataTypes.FLOAT,
    surface: DataTypes.FLOAT,
    keyword: DataTypes.STRING,
    characteristics: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Property',
  });
  return Property;
};