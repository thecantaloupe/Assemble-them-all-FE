import { CREATE, GETALL, UPDATE, DELETE } from "../constants/actionTypes";

export default (assembles = [], action) => {
    switch (action.type) {
        case GETALL:
            return action.payload;
        case CREATE:
            return [...assembles, action.payload];
        case UPDATE:
            return assembles.map((ass)=>ass._id===action.payload._id ? action.payload : ass);
        case DELETE:
            return assembles.filter((ass) => ass._id !== action.payload);
        default:
            return assembles;
    }
}