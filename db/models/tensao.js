"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tensao = sequelize.define(
    "Tensao",
    {
      valor: DataTypes.FLOAT
    },
    {}
  );
  Tensao.associate = function(models) {
    Tensao.hasMany(models.Sensor, {
      foreignKey: "tensao_id"
    });
  };
  return Tensao;
};
