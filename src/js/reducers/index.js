import { combineReducers } from 'redux';
import PostReducer from './reducerPost';

export default combineReducers({
  posts: PostReducer
});
