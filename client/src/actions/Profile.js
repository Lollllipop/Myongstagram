import axios from 'axios';
import qs from 'qs';
import { Config } from '../config';
import { AsyncStorage } from 'react-native';

export const GET_CURRENT_USER = 'GET_CURRENT_USER';
export const GET_USER_POSTS = 'GET_USER_POSTS';
export const GET_MY_POSTS = 'GET_MY_POSTS';


export function getCurrentUser() {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/user`);

    dispatch({
      type: GET_CURRENT_USER, 
      data: {
        username: response.data.username,
        email: response.data.email,
        id: response.data.id
      }
    });
  };
}

export function getMyPosts(userId) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/posts?userId=${userId}`);

    dispatch({
      type: GET_MY_POSTS, 
      data: {
        posts: response.data
      }
    });
  };
}

export function getUserPosts(userId) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/posts?userId=${userId}`);

    dispatch({
      type: GET_USER_POSTS, 
      data: {
        posts: response.data
      }
    });
  };
}