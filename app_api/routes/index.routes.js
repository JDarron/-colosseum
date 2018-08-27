const express = require('express')
    , router = express.Router()
    // , authRoutes = require('./auth/authRoutes')
    // ROUTES
    , userRoutes = require("./api/user.routes")
    , playerRoutes = require("./api/player.routes")
    , followPlayerRoutes = require("./api/followPlayer.routes")
    , gameRoutes = require("./api/game.routes")
    , followGameRoutes = require("./api/followGame.routes")
    , gameRosterRoutes = require("./api/gameRoster.routes")
    , teamRoutes = require("./api/team.routes")
    , followTeamRoutes = require("./api/followTeam.routes")
    , teamRosterRoutes = require("./api/teamRoster.routes")
    , seasonRoutes = require("./api/season.routes")
    , seasonRosterRoutes = require("./api/seasonRoster.routes")
    , matchRoutes = require("./api/match.routes")
    , matchRosterRoutes = require("./api/matchRoster.routes");

    // , jwt = require('express-jwt');

// // unprotected routes
// router.use('/auth', authRoutes);

// authentication middleware: every route declared after this use statement is protected
// router.use(jwt({ secret: process.env.JWT_SECRET }));

router.use("/user", userRoutes);
// PLAYER
router.use("/player", playerRoutes);
router.use("/player/follow", followPlayerRoutes);
// GAME 
router.use("/game", gameRoutes);
router.use("/game/follow", followGameRoutes);
router.use("/game/roster", gameRosterRoutes);
// TEAM
router.use("/team", teamRoutes);
router.use("/team/follow", followTeamRoutes);
router.use("/team/roster", teamRosterRoutes);
// SEASON
router.use("/season", seasonRoutes);
router.use("/season/roster", seasonRosterRoutes);
// MATCH
router.use("/match", matchRoutes);
router.use("/match/roster", matchRosterRoutes);

module.exports = router;