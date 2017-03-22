
export const selectLibrary = (id) => {
    return {
        type: 'select_library',
        payload: id
    };
};
