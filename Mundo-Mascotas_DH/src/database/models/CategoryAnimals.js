
module.exports = (sequelize, dataTypes) => {
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    name: {
      type: dataTypes.STRING,
    },

    active: {
      
      type: dataTypes.BOOLEAN,
    },

    date_Release: {
      
      type: dataTypes.STRING,
    },
  };

  let config = {
    tableName: "categoryanimals",
    timestamps: false,
  };

  const CategoryAnimal = sequelize.define("CategoryAnimals", cols, config);
  /* Aqui va la asociacion */

  CategoryAnimal.associate = function (models) {

      // Asociacion con la tabla de User
      CategoryAnimal.belongsTo(models.Users, {
          as: "users",
          foreignKey: "user_id",
        });
  
      // Asociacion con la tabla de productos
      CategoryAnimal.hasMany(models.Products, {
        as: "products",
        foreignKey: "categoryAnimal_id",
      });
    };

    return CategoryAnimal;

  };

  

