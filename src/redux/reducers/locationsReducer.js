import produce from 'immer';
import { DELETE_CATEGORY, DELETE_ROW, LOAD_DATA_FROM_LOCAL_STORAGE, RENAME_CATEGORY, SAVE_NEW_LOCATION, UPDATE_ROW } from '../actions';

const initialStateLocations = {
    locationsArray:[],
};

const locationsReducer = produce((state , action)=>{
    switch(action.type) {
        case SAVE_NEW_LOCATION:
            state.locationsArray.push(action.payload);
            break;
        case LOAD_DATA_FROM_LOCAL_STORAGE:
            return action.payload.locationsReducer;
        case DELETE_CATEGORY:
            state.locationsArray = state.locationsArray.filter(locationObj => locationObj.category!==action.payload);
            break;
        case RENAME_CATEGORY:
            state.locationsArray = state.locationsArray.map(item => item.category === action.payload.preName ? {...item , category: action.payload.newName} : item);
            break;
        case UPDATE_ROW:
            state.locationsArray.splice(action.payload.realIndexOfRow , 1 , action.payload.row);
            break;
        case DELETE_ROW:
            state.locationsArray.splice(action.payload.realIndexOfRow , 1);
            break;
    }
} , initialStateLocations);

export default locationsReducer;