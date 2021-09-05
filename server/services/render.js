const axios = require("axios");

exports.homeRoutes = (req, res) => {
  // Make a get request to /api/stories
  axios
    .get("http://localhost:3000/api/stories")
    .then(function (response) {
      console.log(response);
      res.render("index", { stories: response.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
exports.add_story = (req, res) => {
  res.render("add_story");
};

exports.update_story = (req, res) => {
  axios
    .get("http://localhost:3000/api/stories", {
      params: { id: req.query.id },
    })
    .then(function (storydata) {
      res.render("update_story", { story: storydata.data });
    })
    .catch((err) => {
      res.send(err);
    });
};
