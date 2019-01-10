import { TEST } from './types';
import api from '../apis/index';

export const sendFile = file => async dispatch => {
    const obj = { "name": "dave" };

        await api.post('/streams/', file )

        dispatch({type: 'SEND_FILES', payload: obj });
};

// export const deleteStream = (id) => async dispatch => {
//     await Streams.delete(`/streams/${id}`);
//
//     dispatch({type: DELETE_STREAMS, payload: id });
//     history.push('/');
// };
