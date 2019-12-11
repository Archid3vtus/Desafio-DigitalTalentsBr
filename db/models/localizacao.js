"use strict";
module.exports = (sequelize, DataTypes) => {
  const Localizacao = sequelize.define(
    "Localizacao",
    {
      latitude: DataTypes.FLOAT,
      longitude: DataTypes.FLOAT,
      sensor_id: DataTypes.INTEGER
    },
    {}
  );
  Localizacao.associate = function(models) {
    Localizacao.belongsTo(models.Sensor, {
      foreignKey: "sensor_id"
    });
  };
  return Localizacao;
};
