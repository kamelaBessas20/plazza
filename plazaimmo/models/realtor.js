'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Realtor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Realtor.belongsToMany(models.Ad, {through: models.RealtorAd})
      Realtor.hasMany(models.RealtorAd);
      Realtor.hasMany(models.Property)
    }
  };
  Realtor.init({
    firstname: DataTypes.STRING,
    lasname: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Realtor',
  });
  return Realtor;
};