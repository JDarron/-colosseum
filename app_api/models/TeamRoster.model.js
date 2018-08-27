module.exports = function (sequelize, DataTypes) {

    const TeamRoster = sequelize.define("TeamRoster", {
        active: DataTypes.BOOLEAN
    });

    return TeamRoster;
}; // END EXPORT 