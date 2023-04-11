const express = require('express')
const userRouter = require('./routes/survey.routes')
const pageRouter = require('./routes/page.routes')
const questionRouter = require('./routes/question.routes')

const PORT = process.env.PORT || 8080

const app = express()

app.use(express.json())
app.use('/api', userRouter)
app.use('/api', pageRouter)
app.use('/api', questionRouter)


app.get('/', (req, res) => res.send('Hello express'))

app.listen(PORT, () => console.log(`server started on ${PORT} port`))