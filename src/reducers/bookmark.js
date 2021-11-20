import { CREATE, GETALL, UPDATE, DELETE } from "../constants/actionTypes";

export default (bookmarks = [], action) => {
    switch (action.type) {
        case GETALL:
            return action.payload;
        case CREATE:
            return [...bookmarks, action.payload];
        case UPDATE:
            return bookmarks.map((book)=>book._id===action.payload._id ? action.payload : book);
        case DELETE:
            return bookmarks.filter((book) => book._id !== action.payload);
        default:
            return bookmarks;
    }
}