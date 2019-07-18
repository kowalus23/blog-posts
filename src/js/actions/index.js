import {CREATE_POST, FETCH_POSTS, FETCH_POST} from "./types";

const API_KEY = '?key=HOUSTONWEGOTAPROBLEM12345';
const BASE_URL = 'https://reduxblog.herokuapp.com/api';

export const fetchPosts = () => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/posts${API_KEY}`);
  response.json().then(
    posts => {
      dispatch({
        type: FETCH_POSTS,
        payload: posts
      });
    });
};

export const createPost = (values) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/posts${API_KEY}`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(values)
  });
  response.json().then(post => {
    dispatch({
      type: CREATE_POST,
      payload: post
    });
  });
};

export const fetchPost = (id) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/posts/${id}${API_KEY}`);
  response.json().then(post => {
    dispatch({
      type: FETCH_POST,
      payload: post
    })
  })
};

export const deletePost = (id) => async (dispatch) => {
  const response = await fetch(`${BASE_URL}/posts/${id}${API_KEY}`, {
    method: 'DELETE'
  });
  response.json().then(post => {
    dispatch({
      type: FETCH_POST,
      payload: post
    });
  })
};