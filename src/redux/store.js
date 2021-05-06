import { applyMiddleware, combineReducers, createStore } from 'redux';

import { calcRealIndexToUpdateOrDeleteRowMiddleware, loadDataFromLocalStorageMiddleware, saveDataToLocalStorageMiddleware } from './middlewares';
import categoriesReducer from './reducers/categoriesReducer';
import locationsReducer from './reducers/locationsReducer';
import titleReducer from './reducers/titleReducer';
import { loadDataFromLocalStorage } from './actions';

const reducer = combineReducers({ categoriesReducer , locationsReducer, titleReducer});

const store = createStore(reducer , applyMiddleware(saveDataToLocalStorageMiddleware , loadDataFromLocalStorageMiddleware , calcRealIndexToUpdateOrDeleteRowMiddleware));
store.dispatch(loadDataFromLocalStorage());
window.store = store;
export default store;