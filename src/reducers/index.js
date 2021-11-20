import { combineReducers } from "redux";

import auth from './auth';
import local from './localhost';
import bookmarks from "./bookmark";

export const reducers = combineReducers({ auth , local, bookmarks });