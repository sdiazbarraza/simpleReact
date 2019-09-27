
import axios from 'axios';
import { FETCH_MESSAGE ,CREATE_NEW_MESSAGE} from './types';
export const fetchMessage = id => async dispatch => {
   const res = await axios.get(`http://localhost:3001/api/message/${id}`);
  dispatch({ type: FETCH_MESSAGE, payload: res.data });
  };

  export const submitMessage = (values, history) => async dispatch => {
   const res = await axios.post('http://localhost:3001/api/putData', values);
   dispatch({ type: FETCH_MESSAGE, payload: res.data });
  };
  export const updateMessage = (values, history) => async dispatch => {
    const res = await axios.post('http://localhost:3001/api/updateData', values);
    dispatch({ type: FETCH_MESSAGE, payload: res.data });
   };
    