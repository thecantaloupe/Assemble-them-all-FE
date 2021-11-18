import { combineReducers } from "redux";

import auth from './auth';
import local from './localhost';

export const reducers = combineReducers({ auth , local });