
module.exports = function (sequelize, DataTypes) {

    const Player = sequelize.define("Player", {
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    }); // END PLAYER CONSTRUCTOR

    Player.associate = function (models) {

        Player.hasMany(models.Match, {
            onDelete: 'cascade'
        }); // END JOIN 
        
        // PLAYER-USER ASSOCIATIONS
        Player.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });

        Player.belongsToMany(models.User, {
            through: models.FollowPlayer
        });

        Player.belongsToMany(models.Team, {
            through: models.TeamRoster
        });

    }; // END ASSOCIATION

    return Player;
}; // END EXPORT 