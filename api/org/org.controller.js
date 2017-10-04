const config = require('../../config');
const db = require('sqlite-async');

module.exports = {

    // http://localhost:3000/api/orgs
    getAll: () => {
        return db.open(config.SQL_DB)
            .then(db => db.all('SELECT * FROM ' + config.ACADEMIC_ORGANIZATION));
    },

};


