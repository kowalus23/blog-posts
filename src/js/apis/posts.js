import axios from 'axios';

export default axios.create({
  baseURL: 'https://reduxblog.herokuapp.com/api'
})