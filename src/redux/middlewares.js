import { SAVE_NEW_CATEGORY , SAVE_NEW_LOCATION , LOAD_DATA_FROM_LOCAL_STORAGE , DELETE_CATEGORY} from "./actions";

export const saveDataToLocalStorageMiddleware = ({getState}) => next => action => {
    const nextAction = next(action);
    if(action.type !== SAVE_NEW_CATEGORY && action.type !== SAVE_NEW_LOCATION && action.type!== DELETE_CATEGORY) return nextAction;
    localStorage.setItem('myLocationsData',JSON.stringify(getState()));
    return nextAction;
}

export const loadDataFromLocalStorageMiddleware = store => next => action => {
    if(action.type !== LOAD_DATA_FROM_LOCAL_STORAGE) return next(action);
    action.payload = JSON.parse(localStorage.getItem('myLocationsData'));
    if(!action.payload) return;
    return next(action);
}