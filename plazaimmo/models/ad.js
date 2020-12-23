'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Ad.belongsToMany(models.Realtor, {through: models.RealtorAd})
      Ad.hasMany(models.RealtorAd);
    }
  };
  Ad.init({
    dateStart: DataTypes.STRING,
    dateEnd: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ad',
  });
  return Ad;
};