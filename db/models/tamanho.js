"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tamanho = sequelize.define(
    "Tamanho",
    {
      altura: DataTypes.INTEGER,
      largura: DataTypes.INTEGER,
      comprimento: DataTypes.INTEGER,
      sensor_id: DataTypes.INTEGER
    },
    {}
  );
  Tamanho.associate = function(models) {
    Tamanho.belongsTo(models.Sensor, {
      foreignKey: "sensor_id",
      onDelete: "cascade"
    });
  };
  return Tamanho;
};
