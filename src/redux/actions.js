export const SAVE_NEW_CATEGORY = 'SAVE_NEW_CATEGORY';
export const UPDATE_TITLE = 'UPDATE_TITLE';

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