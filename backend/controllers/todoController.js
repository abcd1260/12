const { v4: uuidv4 } = require('uuid');
let todos = require('../data/todos');

const getTodos = (req, res) => {
  res.json(todos);
};

const addTodo = (req, res) => {
  const { text } = req.body;
  if (!text || !text.trim()) {
    return res.status(400).json({ error: 'Text is required' });
  }
  const newTodo = {
    id: uuidv4(),
    text: text.trim(),
    completed: false
  };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

const toggleTodo = (req, res) => {
  const { id } = req.params;
  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todo.completed = !todo.completed;
  res.json(todo);
};

const deleteTodo = (req, res) => {
  const { id } = req.params;
  const index = todos.findIndex(t => t.id === id);
  if (index === -1) {
    return res.status(404).json({ error: 'Todo not found' });
  }
  todos.splice(index, 1);
  res.status(204).send();
};

module.exports = {
  getTodos,
  addTodo,
  toggleTodo,
  deleteTodo
};