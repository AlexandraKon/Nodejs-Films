/** Import library mongoose */
const mongoose = require(`mongoose`);

const crudRepository = require(`../database/crudRepository`);
const Film = require(`../models/db/filmModel`);

module.exports.findById = async (filmId) => {
    const responseObj = { status: false };
    try {
        const data = {
            _id: mongoose.Types.ObjectId(filmId),
            model: Film,
            projection: { __v: false }
        };
        const responseFromRepository = await crudRepository.findById(data);
        if (responseFromRepository.status) {
            return responseFromRepository;
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-filmService-findById: ${error}`);
    }
return responseObj;
};