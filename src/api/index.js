import axios from 'axios'

const API = axios.create({ 
    baseURL: 'https://kadofight.herokuapp.com/',
    headers: {"Content-Type": "application/json"}
})

// way to send session token to backend. interceptors and backend will know we are logged in
API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})

export const fetchAssem = () => API.get('./assemble')
export const createAssem = (newForm) => API.post('./assemble', newForm)
export const updateAssem = (id, updatedForm) => API.put(`./assemble/${id}`, updatedForm)
export const deleteAssem = (id) => API.delete(`./assemble/${id}`)
export const login = (FormData) => API.post('./user/login',FormData)
export const signup = (FormData) => API.post('./user/signup',FormData)