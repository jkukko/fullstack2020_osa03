require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(express.json()) 
app.use(express.static('build'))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :data'))
app.use(cors())

let persons = [
    {
        name:"Arto Hellas",
        number: "040-123456",
        id: 1
    },
    {
        name:"Ada Lovelace",
        number: "39-44-5323523",
        id: 4
    },
    {
        name:"Dan Abramov",
        number: "12-43-234345",
        id: 3
    },
    {
        name:"Mary Poppendieck",
        number: "39-23-6423122",
        id: 4        
    }
]

morgan.token('data', (request) => request.method === 'POST' ? JSON.stringify(request.body) : ' ')

app.get('/info', (req, res) => {
    const info =`<div><p>Phonebook has info for ${persons.length} people</p><p> ${new Date().toString()} </div>`
    res.send(info)
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(persons => {
        res.json(persons)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id).then(person => {
        response.json(person.toJSON())
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)
    response.status(204).end()
})

const generateId = () => {
    return Math.floor(Math.random() * 412431) +1
}

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name) {
        return response.status(400).json({
            error: 'name missing'
        })
    }

    if (!body.number) {
        return response.status(400).json({
            error: 'number missing'
        })
    }

    if (persons.find(person => person.name === body.name)) {
        return response.status(400).json({
            error: 'name must be unique'
        })
    }

    const person = {
        name: body.name,
        number: body.number,
        id: generateId()
    }
    person.save().then(savedPerson => {
        response.json(savedPerson.toJSON())
    })
})


const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})