const {createPageQuery} = require('../helpers/page');

class PageController {
    async createPage(req, res) {
        const {title, surveyId} = req.body
        const page = await createPageQuery({title, surveyId});
        res.json(page);
    }
}

module.exports = new PageController()