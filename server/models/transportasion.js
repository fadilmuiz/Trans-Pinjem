'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transportasion extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Category, {foreignKey: "categoryId"})
    }
  }
  Transportasion.init({
    type: DataTypes.STRING,
    pWeek: DataTypes.INTEGER,
    pDay: DataTypes.INTEGER,
    des: DataTypes.STRING,
    facility: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    status: DataTypes.STRING,
    image: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transportasion',
    hooks: {
      beforeCreate: (transportasion, options) => {
        transportasion.status = transportasion.status || 'siap';
      },
    },
  })
  return Transportasion;
};