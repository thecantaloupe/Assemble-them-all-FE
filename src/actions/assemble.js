import * as api from '../api'
import { CREATE, GETALL, LOCALSTORE, UPDATE, DELETE } from '../constants/actionTypes'

export const getAssem = () => async (dispatch) => {
    try {
        const {data} = await api.fetchAssem()
        console.log(data)
        dispatch({ type: GETALL, payload: data})
        dispatch({ type: LOCALSTORE, data: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const createAssem = (ass) => async (dispatch) => {
    try {
        const {data} = await api.createAssem(ass)

    dispatch({ type: CREATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const updateAssem = (id, ass) => async (dispatch) => {
    try {
        const {data} = await api.updateAssem(id, ass)

    dispatch({ type: UPDATE, payload: data})
    } catch (error) {
        console.log(error.message)
    }  
}

export const deleteAssem = (id) => async (dispatch) => {
    try {
        await api.deleteAssem(id)
        console.log(id)
    dispatch({ type: DELETE, payload: id})
    } catch (error) {
        console.log(error.message)
    }  
}