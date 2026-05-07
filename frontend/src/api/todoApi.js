import axios from 'axios';

const API_BASE_URL = 'https://backend-hbyx.onrender.com/api/todos';

export const getTodos = () => axios.get(API_BASE_URL);
export const addTodo = (text) => axios.post(API_BASE_URL, { text });
export const toggleTodo = (id) => axios.patch(`${API_BASE_URL}/${id}`);
export const deleteTodo = (id) => axios.delete(`${API_BASE_URL}/${id}`);