const express = require('express')
const app = express()

const Data = [
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

const Info = `<p>Phonebook has info for ${Data.length} people</p> <p>${new Date()} </p>`


app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.get('/api/persons', (req, res) => {
  res.send(Data);
});

app.get('/api/info', (req, res) => {
  res.send(Info);
});

const PORT = 3001; 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
