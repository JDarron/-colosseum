module.exports = function (sequelize, DataTypes) {

    const FollowGame = sequelize.define("FollowGame", {
        following: DataTypes.BOOLEAN
    });

    return FollowGame;
}; // END EXPORT 