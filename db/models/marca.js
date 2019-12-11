"use strict";
module.exports = (sequelize, DataTypes) => {
  const Marca = sequelize.define(
    "Marca",
    {
      nome: DataTypes.TEXT
    },
    {}
  );
  Marca.associate = function(models) {
    Marca.hasMany(models.Sensor, {
      foreignKey: "marca_id"
    });
  };
  return Marca;
};
