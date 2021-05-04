import produce from 'immer';
import { DELETE_CATEGORY, LOAD_DATA_FROM_LOCAL_STORAGE, RENAME_CATEGORY, SAVE_NEW_CATEGORY, SET_ACTIVE_CATEGORY } from '../actions';


const initialStateCategories = {
    categoriesArray:[],
    activeCategory: null,
};

const categoriesReducer = produce((state , action) => {
    switch(action.type) {
        case SAVE_NEW_CATEGORY:
            state.categoriesArray.push(action.payload);
            break;
        case LOAD_DATA_FROM_LOCAL_STORAGE:
            state.categoriesArray = action.payload.categoriesReducer.categoriesArray;
            break;
        case DELETE_CATEGORY:
            state.categoriesArray.splice(state.categoriesArray.findIndex(item => item.name === action.payload) , 1);
            break;
        case RENAME_CATEGORY:
            state.categoriesArray[state.categoriesArray.findIndex(item => item.name === action.payload.preName)].name = action.payload.newName;
            state.activeCategory = action.payload.newName;
            break;
        case SET_ACTIVE_CATEGORY:
            state.activeCategory = action.payload;
            break;
    }
} , initialStateCategories);

export default categoriesReducer;