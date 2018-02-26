import { combineReducers } from 'redux';
import { alert } from './component.reducers';

const rootReducer = combineReducers({
    alert
});

export default rootReducer;