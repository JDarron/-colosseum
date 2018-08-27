module.exports = function (sequelize, DataTypes) {

    const MatchRoster = sequelize.define("MatchRoster", {
        compete: DataTypes.BOOLEAN
    });

    return MatchRoster;
}; // END EXPORT 