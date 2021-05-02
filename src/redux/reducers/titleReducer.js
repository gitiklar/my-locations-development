import produce from 'immer';
import { UPDATE_TITLE } from '../actions';

const initialStateTitle = {
    currentTitle:'',
};

const titleReducer = produce((state , action)=>{
    switch(action.type) {
        case UPDATE_TITLE:
            state.currentTitle = action.payload;
            break;
    }
} , initialStateTitle);

export default titleReducer;