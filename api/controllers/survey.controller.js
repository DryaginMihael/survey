const db = require('../db')
const {createPageQuery} = require('../helpers/page');
const {createSurveyQuery, getSurveyQuery} = require("../helpers/survey");


class SurveyController {
    async createSurvey(req, res) {
        const {name, description} = req.body
        const survey = await createSurveyQuery({name, description})
        const page = await createPageQuery({
            title: 'Page 1',
            surveyId: survey.id
        });
        res.json(page)
    }
    async getSurveys(req, res) {
        const {rows} = await db.query('SELECT * FROM survey')
        res.json(rows)
    }
    async getOneSurvey(req, res) {
        const id = req.params.id
        const response = await getSurveyQuery(id);
        res.json(response)
    }
    async updateSurvey(req, res) {
        const {name, description, id} = req.body
        const {rows} = await db.query(
            'UPDATE survey set name = $1, description = $2 where id = $3 RETURNING *',
            [name, description, id]
        )
        res.json(rows[0])
    }
    async deleteSurvey(req, res) {
        const id = req.params.id
        const {rows} = await db.query('DELETE FROM person where id = $1', [id])
        res.json(rows[0])
    }
}

module.exports = new SurveyController()