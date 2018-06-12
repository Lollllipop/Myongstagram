import axios from 'axios';
import qs from 'qs';
import { Config } from '../config';
import { AsyncStorage } from 'react-native';

export const GET_USERS = 'GET_USERS';
export const GET_RECENT_USERS = 'GET_RECENT_USERS';
export const GET_PRIOR_USERS = 'GET_PRIOR_USERS';
export const GET_SEARCH_USERS = 'GET_SEARCH_USERS';
export const GET_POSTS = 'GET_POSTS';
export const GET_RECENT_POSTS = 'GET_RECENT_POSTS';
export const GET_PRIOR_POSTS = 'GET_PRIOR_POSTS';
export const GET_SEARCH_POSTS = 'GET_SEARCH_POSTS';


export function getUsers() {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/users`);
    
    dispatch({
      type: GET_USERS, 
      data: {
        users: response.data
      }
    });
  };
}

export function getRecentUsers(recentUserId, isSearching, keyword) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/users?recentUserId=${recentUserId}&isSearching=${isSearching}&searchKeyword=${keyword}`);

    dispatch({
      type: GET_RECENT_USERS, 
      data: {
        users: response.data
      }
    });
  };
}

export function getPriorUsers(lastUserId, isSearching, keyword) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/users?lastUserId=${lastUserId}&isSearching=${isSearching}&searchKeyword=${keyword}`);
   
    dispatch({
      type: GET_PRIOR_USERS, 
      data: {
        users: response.data
      }
    });
  };
}

export function getSearchUsers(keyword) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/users?searchKeyword=${keyword}`);

    dispatch({
      type: GET_SEARCH_USERS, 
      data: {
        users: response.data
      }
    });
  };
}


export function getPosts() {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/Posts`);
    
    dispatch({
      type: GET_POSTS, 
      data: {
        posts: response.data
      }
    });
  };
}

export function getRecentPosts(recentPostId) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/posts?recentPostId=${recentPostId}`);

    dispatch({
      type: GET_RECENT_POSTS, 
      data: {
        posts: response.data
      }
    });
  };
}

export function getPriorPosts(lastPostId) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/posts?lastPostId=${lastPostId}`);
   
    dispatch({
      type: GET_PRIOR_POSTS, 
      data: {
        posts: response.data
      }
    });
  };
}