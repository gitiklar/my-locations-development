import produce from 'immer';
import { DELETE_CATEGORY, LOAD_DATA_FROM_LOCAL_STORAGE, SAVE_NEW_CATEGORY } from '../actions';


const initialStateCategories = {
    categoriesArray:[],
};

const categoriesReducer = produce((state , action) => {
    switch(action.type) {
        case SAVE_NEW_CATEGORY:
            state.categoriesArray.push(action.payload);
            break;
        case LOAD_DATA_FROM_LOCAL_STORAGE:
            return action.payload.categoriesReducer;
        case DELETE_CATEGORY:
            state.categoriesArray.splice(state.categoriesArray.findIndex(item => item.name === action.payload) , 1);
            break;
    }
} , initialStateCategories);

export default categoriesReducer;