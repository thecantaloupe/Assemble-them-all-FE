import axios from 'axios'

const API = axios.create({ 
    baseURL: 'http://localhost:4000',
    headers: {"Content-Type": "application/json"}
})


// way to send session token to backend. interceptors and backend will know we are logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})


export const fetchBook = () => API.get('./bookmark')
export const createBook = (newForm) => API.post('./bookmark', newForm)
export const updateBook = (id, updatedForm) => API.put(`./bookmark/${id}`, updatedForm)
export const deleteBook = (id) => API.delete(`./bookmark/${id}`)

export const login = (FormData) => API.post('./user/login',FormData)
export const signup = (FormData) => API.post('./user/signup',FormData)