import { LOCALSTORE } from '../constants/actionTypes'

const localReducer = (state={ bookmark: null }, action) => {
    switch(action.type) {
        case LOCALSTORE:
            localStorage.setItem('bookmark', JSON.stringify({...action?.data}));
            return {...state, bookmark: action?.data};
        // case LOGOUT:
        //     localStorage.clear()
        //     return {...state, bookmark: null};
        default:
            return state;
    }
}

export default localReducer;