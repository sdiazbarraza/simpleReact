
import axios from 'axios';
import { FETCH_MESSAGE ,CREATE_NEW_MESSAGE} from './types';
export const fetchMessage = id => async dispatch => {
  //TODO : FALTA IMPLREMENTAR FUNCION DE TRAER UN SOLO MENSAJE 
  const res = await axios.get(`http://localhost:3001/api/message/${id}`);
  console.log("fetchmessage");
  console.log(res.data);
  dispatch({ type: FETCH_MESSAGE, payload: res.data });
  };

  export const submitMessage = (values, history) => async dispatch => {
    console.log("IN ACTION")
  
  const res = await axios.post('http://localhost:3001/api/putData', values);
   dispatch({ type: FETCH_MESSAGE, payload: res.data });
  };
    