"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sensor = sequelize.define(
    "Sensor",
    {
      codename: DataTypes.TEXT,
      tensao_id: DataTypes.INTEGER,
      marca_id: DataTypes.INTEGER,
      tipo_id: DataTypes.INTEGER
    },
    {}
  );
  Sensor.associate = function(models) {
    Sensor.belongsTo(models.Tensao, {
      foreignKey: "tensao_id"
    });

    Sensor.belongsTo(models.Marca, {
      foreignKey: "marca_id"
    });

    Sensor.belongsTo(models.Tipo, {
      foreignKey: "tipo_id"
    });

    Sensor.hasOne(models.Tamanho, {
      foreignKey: "sensor_id"
    });

    Sensor.hasOne(models.Localizacao, {
      foreignKey: "sensor_id"
    });

    Sensor.hasMany(models.Medida, {
      foreignKey: "sensor_id"
    });
  };
  return Sensor;
};
