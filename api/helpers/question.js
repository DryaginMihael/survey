const db = require('../db');

const createQuestionQuery = async ({title, type, pageId}) => {
    const {rows} = await db.query(
        'INSERT INTO question (title, type, page_id) values($1, $2, $3) RETURNING *',
        [title, type, pageId]
    );
    return rows[0];
}

const getAllQuestionsQuery = async (pageId) => {
    const {rows} = await db.query('SELECT * FROM question where page_id = $1', [pageId])
    return rows
}

module.exports = {
    createQuestionQuery,
    getAllQuestionsQuery
}
