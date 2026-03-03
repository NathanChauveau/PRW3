const mongoose = require('mongoose')

if (process.argv.length < 5) {
  console.log('give the necessary arguments to create a new record of a person')
  process.exit(1)
}

const password = process.argv[2]
const name = process.argv[3]
const number = process.argv[4]

const url = `mongodb+srv://nathanchauveau_db_user:${password}@cluster0.rcgxpqj.mongodb.net/?appName=Cluster0`

mongoose.set('strictQuery', false)
mongoose.connect(url, {
  serverSelectionTimeoutMS: 1000000000,
})

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: name,
  number: number,
})

person.save().then(() => {
  console.log(`added ${name} number ${number} to phonebook`)
  mongoose.connection.close()
})