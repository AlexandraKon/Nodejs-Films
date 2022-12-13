/** Import express */
const express = require('express');
/** Import cors */
const cors = require('cors');

/** Configuration js for reading variables in .env */
require('dotenv').config();

/** Import database */
const db = require('./database/connect');

/** Create app express*/ 
const app = express();

/** Read json requests */
app.use(express.json());
app.use(cors());

/** Call module from folder database for create connection */
db.createConnection();

/** Rquest for films */
app.use('/api/v1/films', require('./routers/filmRouter'));

app.listen(process.env.PORT, () => {
    console.log('Listening on port ' + process.env.PORT)
});