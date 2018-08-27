
module.exports = function (sequelize, DataTypes) {

    const Match = sequelize.define("Match", {
        date:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    Match.associate = function (models) {

        Match.belongsTo(models.Season, {
            foreignKey: {
                allowNull: false
            }
        });

        Match.belongsToMany(models.Player, {
            through: models.MatchRoster
        });

    };

    return Match;
}; // END EXPORT 