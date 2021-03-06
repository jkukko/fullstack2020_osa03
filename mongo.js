const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give at least password as argument')
  process.exit(1)
}

const password = process.argv[2]
const input_name = process.argv[3]
const input_number = process.argv[4]

const url =
    `mongodb+srv://test_admin:${password}@cluster0.0bdnt.mongodb.net/puhelinluettole-app?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })


const personSchema = new mongoose.Schema({
  name: String,
  number: String
})

const Person = mongoose.model('Person', personSchema)

if (process.arch.length === 3) {
  Person.find({}).then(result => {
    console.log('phonebook:')
    result.forEach(person => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
} else if (process.argv.length === 5) {
  const person = new Person({
    name: input_name,
    number: input_number
  })
  person.save().then(response => {
    console.log('added', person.name, 'number', person.number, 'to phonebook')
    mongoose.connection.close()
  })
}




