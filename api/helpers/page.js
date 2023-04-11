const db = require('../db');
const {getAllQuestionsQuery} = require("./question");

const createPageQuery = async ({title, surveyId}) => {
    const {rows} = await db.query(
        'INSERT INTO page (title, survey_id) values($1, $2) RETURNING *',
        [title, surveyId]
    );
    return rows[0];
}

const getPagesQuery = async ({surveyId}) => {
    let {rows: pages} = await db.query(
        'SELECT * from page WHERE survey_id = $1',
        [surveyId]
    );
    await Promise.all(pages.map(async (page) => {
        page.questions = await getAllQuestionsQuery(page.id)
    }))
    return pages;
}

module.exports = {
    createPageQuery,
    getPagesQuery
}
