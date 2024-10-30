const express = require('express');
const app = express();
const PORT = 3001;

const persons = [
  { id: 1, name: 'Arto Hellas', number: '040-123456' },
  { id: 2, name: 'Ada Lovelace', number: '39-44-5323523' },
  { id: 3, name: 'Dan Abramov', number: '12-43-234345' },
  { id: 4, name: 'Mary Poppendieck', number: '39-23-6423122' }
];

// Route to get all persons
app.get('/api/persons', (req, res) => {
  res.json(persons);
});

// Route for /info
app.get('/info', (req, res) => {
  const date = new Date();
  const info = `
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${date}</p>
  `;
  res.send(info);
});

// Route to get a person by ID
app.get('/api/persons/:id', (req, res) => {
  const id = Number(req.params.id);
  const person = persons.find(p => p.id === id);

  if (person) {
    res.json(person);
  } else {
    res.status(404).send({ error: 'Person not found' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
