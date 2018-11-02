
module.exports = function (sequelize, DataTypes) {

    const User = sequelize.define("User", {
        email: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
            validate: {
                isEmail: true
            }
        },
        first_name: DataTypes.STRING,
        last_name: DataTypes.STRING,
        salt: DataTypes.STRING,
        hash: DataTypes.STRING

    }); // END User CONSTRUCTOR

    User.associate = function (models) {

        User.hasOne(models.Player, {
            onDelete: 'cascade'
        }); // END JOIN 
        
        User.hasMany(models.Player, {
            onDelete: 'cascade'
        }); // END JOIN 

        User.hasMany(models.Game, {
            onDelete: 'cascade'
        }); // END JOIN 

        User.hasMany(models.Team, {
            onDelete: 'cascade'
        }); // END JOIN 
        
    }; // END ASSOCIATION

    return User;
}; // END EXPORT 