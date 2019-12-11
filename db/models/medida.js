"use strict";
module.exports = (sequelize, DataTypes) => {
  const Medida = sequelize.define(
    "Medida",
    {
      valor: DataTypes.FLOAT,
      sensor_id: DataTypes.INTEGER
    },
    {}
  );
  Medida.associate = function(models) {
    Medida.belongsTo(models.Sensor, {
      foreignKey: "sensor_id"
    });
  };
  return Medida;
};
