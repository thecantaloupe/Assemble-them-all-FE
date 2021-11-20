import * as api from '../api'
import { CREATE, GETALL, LOCALSTORE, UPDATE, DELETE } from '../constants/actionTypes'

export const getBooks = () => async (dispatch) => {
    try {
        const {data} = await api.fetchBook()
        console.log(data)
        dispatch({ type: GETALL, payload: data})
        dispatch({ type: LOCALSTORE, data: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const createBook = (book) => async (dispatch) => {
    try {
        const {data} = await api.createBook(book)

    dispatch({ type: CREATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const updateBook = (id, book) => async (dispatch) => {
    try {
        const {data} = await api.updateBook(id, book)

    dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const deleteBook = (id) => async (dispatch) => {
    try {
        await api.deleteBook(id)
        console.log(id)
    dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error.message)
    }  
}