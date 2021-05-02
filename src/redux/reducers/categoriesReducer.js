import produce from 'immer';
import { SAVE_NEW_CATEGORY } from '../actions';


const initialStateCategories = {
    categoriesArray:[],
};

const categoriesReducer = produce((state , action)=>{
    switch(action.type) {
        case SAVE_NEW_CATEGORY:
            state.categoriesArray.push(action.payload);
            break;
    }
} , initialStateCategories);

export default categoriesReducer;