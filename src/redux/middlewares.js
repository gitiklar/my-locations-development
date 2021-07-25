import { SAVE_NEW_CATEGORY , SAVE_NEW_LOCATION , LOAD_DATA_FROM_LOCAL_STORAGE , DELETE_CATEGORY, RENAME_CATEGORY, UPDATE_ROW, DELETE_ROW } from "./actions";
import myData from '../myData';

export const saveDataToLocalStorageMiddleware = ({ getState }) => next => action => {
    const listActionsForSaveDataToLocalStorage = [ SAVE_NEW_CATEGORY , SAVE_NEW_LOCATION , DELETE_CATEGORY , RENAME_CATEGORY , UPDATE_ROW , DELETE_ROW ];
    const nextAction = next(action);
    if(!listActionsForSaveDataToLocalStorage.includes(action.type)) return nextAction;
    localStorage.setItem('myLocationsData',JSON.stringify(getState()));
    return nextAction;
}

export const loadDataFromLocalStorageMiddleware = store => next => action => {
    if(action.type !== LOAD_DATA_FROM_LOCAL_STORAGE) return next(action);
    action.payload = JSON.parse(localStorage.getItem('myLocationsData'));
    //Remove this row if you do not want to boot the app in the data
    if(!action.payload) action.payload = myData;
    if(!action.payload) return;
    
    return next(action);
}

export const calcRealIndexToUpdateOrDeleteRowMiddleware = ({ getState }) => next => action => {
    if(action.type !== UPDATE_ROW && action.type !== DELETE_ROW) return next(action);

    const locationsArray =  getState().locationsReducer.locationsArray;
    let realIndexOfRow = -1;
    for(let i = 0 ; i < locationsArray.length ; i++) {
        locationsArray[i].category === getState().categoriesReducer.activeCategory && realIndexOfRow++;
        if(realIndexOfRow === action.payload.indexInSpecificCategoryList) { realIndexOfRow = i; break; }
    }
    action.payload.realIndexOfRow = realIndexOfRow;
    action.type === UPDATE_ROW && (action.payload.row.category = getState().categoriesReducer.activeCategory);
    
    return next(action);
}