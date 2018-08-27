
module.exports = function (sequelize, DataTypes) {

    const FollowTeam = sequelize.define("FollowTeam", {
        following: DataTypes.BOOLEAN
    });

    return FollowTeam;
}; // END EXPORT 