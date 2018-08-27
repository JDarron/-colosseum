module.exports = function (sequelize, DataTypes) {

    const SeasonRoster = sequelize.define("SeasonRoster", {
        compete: DataTypes.BOOLEAN
    });

    return SeasonRoster;
}; // END EXPORT 