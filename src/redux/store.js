
import { applyMiddleware, combineReducers, createStore } from 'redux';

import { loadDataFromLocalStorage } from './actions';
import { calcRealIndexToReplaceRowMiddleware, loadDataFromLocalStorageMiddleware , saveDataToLocalStorageMiddleware } from './middlewares';
import categoriesReducer from './reducers/categoriesReducer';
import locationsReducer from './reducers/locationsReducer';
import titleReducer from './reducers/titleReducer';

const reducer = combineReducers({ categoriesReducer , locationsReducer, titleReducer});

const store = createStore(reducer , applyMiddleware(saveDataToLocalStorageMiddleware , loadDataFromLocalStorageMiddleware , calcRealIndexToReplaceRowMiddleware));
store.dispatch(loadDataFromLocalStorage());
window.store = store;
export default store;