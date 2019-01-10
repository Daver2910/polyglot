import { TEST } from '../actions/types';

const dummy = (state = {}, action) => {

    switch (action.type) {

        case 'SEND_FILES':
            return state;

        default:
            return state;
    }
};

export default dummy;
