import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import tasks from './tasks';


const rootReducer = combineReducers({
    tasks,
    form: formReducer
});

export default rootReducer;