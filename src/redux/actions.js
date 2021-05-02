export const SAVE_NEW_CATEGORY = 'SAVE_NEW_CATEGORY';
export const SAVE_NEW_LOCATION = 'SAVE_NEW_LOCATION';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const LOAD_DATA_FROM_LOCAL_STORAGE = 'LOAD_DATA_FROM_LOCAL_STORAGE';

export const savNewCategory = (name) => {
    return { type: SAVE_NEW_CATEGORY , payload:{ name } };
}

export const updateTitle = (title) => {
    return { type: UPDATE_TITLE , payload: title};
}

export const validateUniqueFieldInAnArray = (items) => ({ validator(rule, value) {
        if(items.includes(value))
            return Promise.reject('This category is already exists!');
        return Promise.resolve();
    }
});

export const loadDataFromLocalStorage = () => {
    return { type: LOAD_DATA_FROM_LOCAL_STORAGE };
}