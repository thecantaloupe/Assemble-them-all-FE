import { LOCALSTORE } from '../constants/actionTypes'

const localReducer = (state={ assemble: null }, action) => {
    switch(action.type) {
        case LOCALSTORE:
            let test = {}
            test.data = {...action?.data}
            localStorage.setItem('localstore', JSON.stringify([...action?.data]));
            return {...state, assemble: action?.data};
        // case LOGOUT:
        //     localStorage.clear()
        //     return {...state, bookmark: null};
        default:
            return state;
    }
}

export default localReducer;