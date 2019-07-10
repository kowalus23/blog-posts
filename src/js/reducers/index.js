import { combineReducers } from 'redux';
import {reducer as formReducer} from 'redux-form'
import PostReducer from './reducerPost';

export default combineReducers({
  posts: PostReducer,
  form: formReducer,
});
