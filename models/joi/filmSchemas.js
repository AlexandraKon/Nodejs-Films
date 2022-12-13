const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

module.exports.filmIdSchema = Joi.object({
    id: Joi.objectId().required()
});