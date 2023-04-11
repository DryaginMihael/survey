const db = require('../db');
const {getPagesQuery} = require("./page");

const createSurveyQuery = async ({name, description}) => {
    const {rows} = await db.query(
        'INSERT INTO survey (name, description, create_date) values($1, $2, now()) RETURNING *',
        [name, description]
    );
    return rows[0];
}

const getSurveyQuery = async (id) => {
    const {rows} = await db.query('SELECT * FROM survey where id = $1', [id])
    const survey = rows[0]
    const pages = await getPagesQuery({surveyId: survey.id})
    return {
        ...survey,
        pages
    }
}

module.exports = {
    createSurveyQuery,
    getSurveyQuery
}
