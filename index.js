const express = require('express')
const app = express()

let Data = [
  { 
    "id": "1",
    "name": "Arto Hellas", 
    "number": "040-123456"
  },
  { 
    "id": "2",
    "name": "Ada Lovelace", 
    "number": "39-44-5323523"
  },
  { 
    "id": "3",
    "name": "Dan Abramov", 
    "number": "12-43-234345"
  },
  { 
    "id": "4",
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122"
  }
]


app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('/api/persons', (req, res) => {
  res.send(Data)
})

app.get('/api/info', (req, res) => {
  const Info = `<p>Phonebook has info for ${Data.length} people</p> <p>${new Date()} </p>`
  res.send(Info)
})

app.get('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const person = Data.find(person => person.id === id)

  if (person) {
    res.json(person)
  } else {
    res.status(404).send({ error: 'Person not found' })
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const { id } = req.params
  const person = Data.find(person => person.id === id)
  if (!person) {
    return res.status(404).json({ error: 'Person not found' })
  }
  Data = Data.filter(person => person.id !== id)
  res.status(204).end()
})



const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
