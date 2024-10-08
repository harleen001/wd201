'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
     
      this.hasMany(models.Chapters, { foreignKey: "courseId" });
      
    }
    
  }
  Courses.init({
    title: DataTypes.STRING,
    
  }, {
    sequelize,
    modelName: 'Courses',
  });
  return Courses;
};
