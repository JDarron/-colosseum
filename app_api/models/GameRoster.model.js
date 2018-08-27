module.exports = function (sequelize, DataTypes) {

    const GameRoster = sequelize.define("GameRoster", {
        active: DataTypes.BOOLEAN
    });

    return GameRoster;
}; // END EXPORT 