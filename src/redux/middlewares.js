import { SAVE_NEW_CATEGORY , SAVE_NEW_LOCATION , LOAD_DATA_FROM_LOCAL_STORAGE , DELETE_CATEGORY, RENAME_CATEGORY} from "./actions";

export const saveDataToLocalStorageMiddleware = ({getState}) => next => action => {
    console.log('Before next');
    console.log(getState().categoriesReducer.activeCategory);
    const nextAction = next(action);
    console.log('After next');
    console.log(getState().categoriesReducer.activeCategory);
    console.log('\n');




    if(action.type !== SAVE_NEW_CATEGORY && action.type !== SAVE_NEW_LOCATION && action.type!== DELETE_CATEGORY && action.type !== RENAME_CATEGORY) return nextAction;
    localStorage.setItem('myLocationsData',JSON.stringify(getState()));
    return nextAction;
}

export const loadDataFromLocalStorageMiddleware = store => next => action => {
    if(action.type !== LOAD_DATA_FROM_LOCAL_STORAGE) return next(action);
    action.payload = JSON.parse(localStorage.getItem('myLocationsData'));
    if(!action.payload) return;
    return next(action);
}