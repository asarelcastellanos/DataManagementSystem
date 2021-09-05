const express = require('express');
const route = express.Router();

const services = require('../services/render');
const controller = require('../controller/controller')

/**
 * @description Root Route
 * @method GET /
 */
route.get('/', services.homeRoutes);

/**
 * @description Add Story Route
 * @method GET /add-story
 */
route.get('/add-story', services.add_story)

/**
 * @description Update Story Route
 * @method GET /update-story
 */
route.get('/update-story', services.update_story)

//API
route.get('/api/stories', controller.find);
route.post('/api/stories', controller.create);
route.put('/api/stories/:id', controller.update);
route.delete('/api/stories/:id', controller.delete);

module.exports = route;