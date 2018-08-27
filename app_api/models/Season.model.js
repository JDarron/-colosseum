
module.exports = function (sequelize, DataTypes) {

    const Season = sequelize.define("Season", {
        season_num:
        {
            type: DataTypes.INTEGER,
            allowNull: false
        }
    });

    Season.associate = function (models) {

        Season.hasMany(models.Match, {
            onDelete: 'cascade'
        }); // END JOIN 

        Season.belongsToMany(models.Team, {
            through: models.SeasonRoster
        });

    };

    return Season;
}; // END EXPORT 