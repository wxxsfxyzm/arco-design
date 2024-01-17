// src/api/auth.js
import axios from 'axios';

export function login(username, password) {
  return axios.post('http://localhost:80/auth/local', {
    identifier: username,
    password: password,
  });
}

export function register(username, email, password) {
    return axios.post('http://localhost:80/auth/local/register', {
        username,
        email,
        password,
    });
    }