var Storiesdb = require("../model/model");

// Create and save new story
exports.create = (req, res) => {
  // Validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // New Story
  const story = new Storiesdb({
    idNum: req.body.idNum,
    name: req.body.name,
    condition: req.body.condition,
    dateAdded: req.body.dateAdded,
    content: req.body.content,
    externalLink: req.body.externalLink,
  });

  // Save story in database
  story
    .save(story)
    .then((data) => {
      // res.send(data);
      res.redirect('/add-story')

    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occured while creating a create operation.",
      });
    });
};

// Retrieve and return all stories / retrieve and return a single story
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Storiesdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found story with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res
          .status(500)
          .send({ message: "Erro retrieving story with id " + id });
      });
  } else {
    Storiesdb.find()
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        res
          .status(500)
          .send({
            message:
              err.message || "Error Occurred while retriving story information",
          });
      });
  }
};

//Update a new identified story by story id
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data to update can not be empty" });
  }

  const id = req.params.id;
  Storiesdb.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot Update story with ${id}. Maybe story not found!`,
        });
      } else {
        res.send(data);
      }
    })
    .catch((err) => {
      res.status(500).send({ message: "Error Update story information" });
    });
};

//Delete a story with specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Storiesdb.findByIdAndDelete(id)
    .then((data) => {
      if (!data) {
        res
          .status(404)
          .send({ message: `Cannot Delete with id ${id}. Maybe id is wrong` });
      } else {
        res.send({
          message: "Story was deleted successfully!",
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Story with id:" + id,
      });
    });
};
