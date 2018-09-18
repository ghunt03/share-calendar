var express = require("express");
var router = express.Router();
var calendarController = require("./controller/calendar");
module.exports = router;
router.get("/", calendarController.getCalendar);
