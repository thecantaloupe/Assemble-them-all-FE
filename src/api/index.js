import axios from 'axios'

const API = axios.create({ baseURL: 'https://bookmarkd-jrzz.herokuapp.com/'})

// way to send session token to backend. interceptors and backend will know we are logged in
// API.interceptors.request.use.apply((req) => {
//     if(localStorage.getItem('profile')){
//         req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
//     }
//     return req;
// })

export const login = (FormData) => API.post('./user/login',FormData)
export const signup = (FormData) => API.post('./user/signup',FormData)