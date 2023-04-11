const {createQuestionQuery} = require('../helpers/question');

class QuestionController {
    async createQuestion(req, res) {
        const {title, type, pageId} = req.body
        const question = await createQuestionQuery({title, type, pageId});
        res.json(question);
    }
}

module.exports = new QuestionController()