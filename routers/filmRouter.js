/** Import express */
const express = require('express');

const joiSchemaValidation = require('../middlewares/joiMiddleware');
const filmSchemas = require('../models/joi/filmSchemas');
const filmController = require('../controllers/filmController');

/** Create router */
const router = express.Router();

/** Get request films by id */
router.get(`/details/:id`, joiSchemaValidation.validate(filmSchemas.filmIdSchema, 'path'),
filmController.findById);

module.exports = router;