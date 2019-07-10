import posts from '../apis/posts'
import {CREATE_POST, FETCH_POSTS, FETCH_POST} from "./types";
import history from '../history'

const API_KEY = '?key=HOUSTONWEGOTAPROBLEM12345';

export const fetchPosts = () => async (dispatch) => {
  const response = await posts.get(`/posts${API_KEY}`);

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  });

};

export const createPost = (values) => async (dispatch) => {
  const response = await posts.post(`/posts${API_KEY}`, values);

  dispatch({
    type: CREATE_POST,
    payload: response.data
  });

  history.push('/')
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await posts.get(`/posts/${id}${API_KEY}`);

  dispatch ({
    type: FETCH_POST,
    payload: response.data
  })
};