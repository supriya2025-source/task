import axios from 'axios';

const API_URL = 'http://localhost:5000/api'; // Replace with your backend URL

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Sample functions for user sign-up, sign-in, and tasks
export const signUp = (data: { email: string; password: string }) => {
  return api.post('/signup', data);
};

export const signIn = (data: { email: string; password: string }) => {
  return api.post('/signin', data);
};

export const getTasks = () => {
  return api.get('/tasks');
};

export const addTask = (task: { title: string; description: string }) => {
  return api.post('/tasks', task);
};

export const updateTask = (id: string, task: { title: string; description: string }) => {
  return api.put(`/tasks/${id}`, task);
};

export const deleteTask = (id: string) => {
  return api.delete(`/tasks/${id}`);
};