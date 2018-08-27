
module.exports = function (sequelize, DataTypes) {

    const User = sequelize.define("User", {
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
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