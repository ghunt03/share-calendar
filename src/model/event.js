module.exports = function(item) {
  return {
    start: item.EventDate,
    end: item.EndDate,
    summary: item.Title,
    description: item.Description,
    location: item.Location || "",
    url: ""
  };
};
