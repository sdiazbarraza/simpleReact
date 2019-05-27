import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import messageReducer from './messageReducer';

export default combineReducers({
  message:messageReducer,
  form: reduxForm
});
