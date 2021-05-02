
import { combineReducers, createStore } from 'redux';
import categoriesReducer from './reducers/categoriesReducer';
import titleReducer from './reducers/titleReducer';

const reducer = combineReducers({categories: categoriesReducer , title: titleReducer});

const store = createStore(reducer);
window.store = store;
export default store;