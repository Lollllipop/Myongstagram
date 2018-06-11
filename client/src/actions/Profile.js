import axios from 'axios';
import qs from 'qs';
import { Config } from '../config';
import { AsyncStorage } from 'react-native';

export const GET_CURRENT_USER = 'GET_CURRENT_USER';


export function getCurrentUser(username, password) {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/api/user`)

    dispatch({
      type: GET_CURRENT_USER, 
      data: {
        username: response.data.username,
        email: response.data.email,
      }
    });
  };
}