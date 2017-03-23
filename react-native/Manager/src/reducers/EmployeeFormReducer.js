
import { EMPLOYEE_UPDATE, EMPLOYEE_CREATE } from '../actions/types';

const initialState = {
    name: '',
    phone: '',
    shift: ''
};

export default (state = initialState, action) => {
    const { payload } = action;

    switch (action.type) {
        case EMPLOYEE_UPDATE:
            // action.payload === { prop: 'name', value: 'Jane' }
            // Key interpolation -> [payload.prop]: payload.value -> name: 'Jave'
            return { ...state, [payload.prop]: payload.value };
        case EMPLOYEE_CREATE:
            return initialState;
        default:
            return state;
    }
};
