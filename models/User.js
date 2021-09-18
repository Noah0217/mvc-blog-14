const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const bcrypt = require('bcrypt');
class User extends Model {
 
checkPassword(loginPW) {
        return bcrypt.compareSync(loginPW, this.password);
    }
}

//column tables
User.init(
  {
//id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },

//username column
    username: {
        type: DataTypes.STRING,
        allowNull:false,
        unique: true
    },
    
//password column 
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
// password has to be at least 4 characters whatever is in length (len) array changes password character limit
            len: [4]
        }
    }
  },

//executes password function
  {
    hooks: {
        async beforeCreate(newUserData) {
            newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUserData;
            
        },
        async beforeUpdate(updatedUserData) {
            updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
            return updatedUserData;
        }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;