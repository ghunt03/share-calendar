var spauth = require("node-sp-auth");
var requestprom = require("request-promise");
const moment = require("moment");
var when = require("when");

module.exports = function() {
  return when.promise(function(resolve, reject) {
    spauth
      .getAuth(config.sharepointUrl, {
        clientId: config.clientId,
        clientSecret: config.clientSecret
      })
      .then(function(options) {
        // Headers
        var headers = options.headers;
        headers["Accept"] = "application/json;odata=verbose";
        // Pull the SharePoint list items
        requestprom
          .get({
            url:
              config.sharepointUrl +
              "/_api/web/lists/getByTitle('Calendar')/items",
            headers: headers,
            json: true
          })
          .then(function(listresponse) {
            var items = listresponse.d.results;
            console.log(items);
            var events = [];
            // process
            items.forEach(function(item) {
              const event = {
                start: item.EventDate,
                end: item.EndDate,
                summary: item.Title,
                description: item.Description,
                location: item.Location || "",
                url: ""
              };
              events.push(event);
            }, this);
            resolve(events);
            //   cal.events(events);
            //   cal.serve(response, 'calendar.ics');
          });
      });
  });
};
