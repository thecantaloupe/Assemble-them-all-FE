import { combineReducers } from "redux";

import auth from './auth';
import local from './localhost';
import assembles from "./assemble";

export const reducers = combineReducers({ auth , local, assembles });