import produce from 'immer';
import { LOAD_DATA_FROM_LOCAL_STORAGE, SAVE_NEW_LOCATION } from '../actions';


const initialStateLocations = {
    locationsArray:[{
        name: '', 
        address: '',
        coordinates: '',
        category: '',
    }],
};

const locationsReducer = produce((state , action)=>{
    switch(action.type) {
        case SAVE_NEW_LOCATION:
            state.locationsArray.push(action.payload);
            break;
        case LOAD_DATA_FROM_LOCAL_STORAGE:
            return action.payload.locationsReducer;
    }
} , initialStateLocations);

export default locationsReducer;