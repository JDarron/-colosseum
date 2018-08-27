
module.exports = function (sequelize, DataTypes) {

    const FollowPlayer = sequelize.define("FollowPlayer", {
        following: DataTypes.BOOLEAN
    });

    return FollowPlayer;
}; // END EXPORT 