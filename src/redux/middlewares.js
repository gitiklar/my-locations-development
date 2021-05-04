import { SAVE_NEW_CATEGORY , SAVE_NEW_LOCATION , LOAD_DATA_FROM_LOCAL_STORAGE , DELETE_CATEGORY, RENAME_CATEGORY} from "./actions";

export const saveDataToLocalStorageMiddleware = ({getState}) => next => action => {
    const listActionsToSaveData = [ SAVE_NEW_CATEGORY , SAVE_NEW_LOCATION , DELETE_CATEGORY , RENAME_CATEGORY ];
    const nextAction = next(action);
    if(!listActionsToSaveData.includes(action.type)) return nextAction;
    localStorage.setItem('myLocationsData',JSON.stringify(getState()));
    return nextAction;
}

export const loadDataFromLocalStorageMiddleware = store => next => action => {
    if(action.type !== LOAD_DATA_FROM_LOCAL_STORAGE) return next(action);
    action.payload = JSON.parse(localStorage.getItem('myLocationsData'));
    if(!action.payload) return;
    return next(action);
}