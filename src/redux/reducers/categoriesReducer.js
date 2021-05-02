import produce from 'immer';
import { LOAD_DATA_FROM_LOCAL_STORAGE, SAVE_NEW_CATEGORY } from '../actions';


const initialStateCategories = {
    categoriesArray:[],
};

const categoriesReducer = produce((state , action)=>{
    switch(action.type) {
        case SAVE_NEW_CATEGORY:
            state.categoriesArray.push(action.payload);
            break;
        case LOAD_DATA_FROM_LOCAL_STORAGE:
            return action.payload.categoriesReducer;
    }
} , initialStateCategories);

export default categoriesReducer;