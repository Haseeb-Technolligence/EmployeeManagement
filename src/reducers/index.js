import { combineReducers } from 'redux';
import {demoReducer} from './empdata';

const allReducers = combineReducers({
    xyz: demoReducer,
});

export default allReducers;  