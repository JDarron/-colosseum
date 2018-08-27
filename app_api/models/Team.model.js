
module.exports = function (sequelize, DataTypes) {

    const Team = sequelize.define("Team", {
        team_name:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Team.associate = function (models) {

        Team.hasMany(models.Player, {
            onDelete: 'cascade'
        }); // END JOIN 
        
        Team.belongsToMany(models.User, {
            through: models.FollowTeam
        });

        Team.belongsToMany(models.Game, {
            through: models.GameRoster
        });
    };

    return Team;
}; // END EXPORT 