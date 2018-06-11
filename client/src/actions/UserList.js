import axios from 'axios';
import qs from 'qs';
import { Config } from '../config';
import { AsyncStorage } from 'react-native';

export const GET_USERS = 'GET_RANDOM_USERS';


export function getUsers(lastId) {
  return async dispatch => {
    let response;
    
    if (lastId) {
      response = await axios.get(`${Config.server}/api/users?lastId=${lastId}`);
    } else {
      response = await axios.get(`${Config.server}/api/users?`);
    }
    
    dispatch({
      type: GET_USERS, 
      data: {
        users: response.data
      }
    });
  };
}