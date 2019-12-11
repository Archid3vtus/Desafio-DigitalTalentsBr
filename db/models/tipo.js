"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tipo = sequelize.define(
    "Tipo",
    {
      nome: DataTypes.TEXT,
      sulfixo: DataTypes.TEXT
    },
    {}
  );
  Tipo.associate = function(models) {
    Tipo.hasMany(models.Tipo, {
      foreignKey: "tipo_id"
    });
  };
  return Tipo;
};
