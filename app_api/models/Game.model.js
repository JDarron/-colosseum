
module.exports = function (sequelize, DataTypes) {

    const Game = sequelize.define("Game", {
        game_title:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Game.associate = function (models) {

        Game.hasMany(models.Team, {
            onDelete: 'cascade'
        });

        Game.belongsToMany(models.User, {
            through: models.FollowGame
        });

    };

    return Game;
}; // END EXPORT 