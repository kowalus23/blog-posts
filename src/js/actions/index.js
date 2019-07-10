import axios from 'axios'
import {FETCH_POSTS} from "./types";

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=HOUSTONWEGOTAPROBLEM12345';

export const fetchPosts = () => async (dispatch) => {
  const response = await axios.get(`${ROOT_URL}/posts${API_KEY}`);

  dispatch({
    type: FETCH_POSTS,
    payload: response.data
  })
};