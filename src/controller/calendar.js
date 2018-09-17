const ical = require("ical-generator");
var getEvents = require("../functions/getEvents");

module.exports = {
  getCalendar
};

function getCalendar(req, res) {
  getEvents().then(function(events) {
    const cal = ical({ domain: config.domain, name: config.calendar_name });
    cal.events(events);
    cal.serve(res, "calendar.ics");
  });
}