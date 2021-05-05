export const SAVE_NEW_CATEGORY = 'SAVE_NEW_CATEGORY';
export const SAVE_NEW_LOCATION = 'SAVE_NEW_LOCATION';
export const UPDATE_TITLE = 'UPDATE_TITLE';
export const LOAD_DATA_FROM_LOCAL_STORAGE = 'LOAD_DATA_FROM_LOCAL_STORAGE';
export const DELETE_CATEGORY = 'DELETE_CATEGORY';
export const RENAME_CATEGORY = 'RENAME_CATEGORY';
export const SET_ACTIVE_CATEGORY = 'SET_ACTIVE_CATEGORY';

export const saveNewCategory = name => {
    return { type: SAVE_NEW_CATEGORY , payload: { name } };
}

export const saveNewLocation = locationData => {
    return { type: SAVE_NEW_LOCATION , payload: locationData };
}

export const updateTitle = title => {
    return { type: UPDATE_TITLE , payload: title};
}

export const validateUniqueFieldInAnArray = items => ({ validator(_, value) {
        if(items.includes(value))
            return Promise.reject('This category is already exists!');
        return Promise.resolve();
    }
});

export const loadDataFromLocalStorage = () => {
    return { type: LOAD_DATA_FROM_LOCAL_STORAGE };
}

export const deleteCategory = categoryName => {
    return { type: DELETE_CATEGORY , payload: categoryName }
}

export const renameCategory = (preName ,newName) =>{
    return { type: RENAME_CATEGORY , payload: { preName , newName } };
}

export const setActiveCategory = categoryName => {
    return { type: SET_ACTIVE_CATEGORY , payload: categoryName};
}