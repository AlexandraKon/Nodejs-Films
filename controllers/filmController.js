const filmService = require('../services/filmService');

module.exports.findById= async (req, res) => {
    const responseObj = { status: 500, message: `Internal server error` };
    try {
        const filmId = req.params.id;
        const responseFromService = await filmService.findById(filmId);
        if (responseFromService.status) {
            if (responseFromService.result) {
                responseObj.body = responseFromService.result;
                responseObj.message = `Film fetched successfully`;
                responseObj.status = 200;
            } else {
                responseObj.message = `Film not found`;
                responseObj.status = 404;
            }
        }
    } catch (error) {
        responseObj.error = error;
        console.log(`ERROR-filmController-findById: ${error}`);
    }
    return res.status(responseObj.status).send(responseObj);
};
