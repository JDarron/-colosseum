const express = require('express');
const router = express.Router();
// API ROUTES
const userRoutes = require("./api/user.routes");
const playerRoutes = require("./api/player.routes");
const followPlayerRoutes = require("./api/followPlayer.routes");
const gameRoutes = require("./api/game.routes");
const followGameRoutes = require("./api/followGame.routes");
const gameRosterRoutes = require("./api/gameRoster.routes");
const teamRoutes = require("./api/team.routes");
const followTeamRoutes = require("./api/followTeam.routes");
const teamRosterRoutes = require("./api/teamRoster.routes");
const seasonRoutes = require("./api/season.routes");
const seasonRosterRoutes = require("./api/seasonRoster.routes");
const matchRoutes = require("./api/match.routes");
const matchRosterRoutes = require("./api/matchRoster.routes");

// USER & ALL PROTECTED
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