const db = require('../db')

class PersonController {
    async createPerson(req, res) {
        const {name, surname} = req.body
        const {rows} = await db.query('INSERT INTO person (name, surname) values($1, $2) RETURNING *', [name, surname])
        res.json(rows[0])
    }
    async getPersons(req, res) {
        const Persons = await db.query('SELECT * FROM person')
        res.json(Persons.rows)
    }
    async getOnePerson(req, res) {
        const id = req.params.id
        const Person = await db.query('SELECT * FROM person where id = $1', [id])
        res.json(Person.rows[0])
    }
    async updatePerson(req, res) {
        const {name, surname, id} = req.body
        console.log(name)
        const {rows} = await db.query(
            'UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',
            [name, surname, id]
        )
        res.json(rows[0])
    }
    async deletePerson(req, res) {
        const id = req.params.id
        const Person = await db.query('DELETE FROM person where id = $1', [id])
        res.json(Person.rows[0])
    }
}

module.exports = new PersonController()