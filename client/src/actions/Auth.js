import axios from 'axios';
import qs from 'qs';
import { AsyncStorage } from 'react-native';
import { Config } from '../config';
import NavigationService from '../../NavigationService';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';


export function signIn(username, password) {
  return async dispatch => {
    try {
      // 주의!: OAuth2Server는 x-www-form-urlencoded 만 받는다.
      const response = await getToken(username, password);

      await setToken(response.data.access_token, response.data.refresh_token)
      NavigationService.navigate('App');
    } catch (err) {
      alert('아이디 또는 비밀번호를 확인하세요.');
    }
  };
}

export function signUp(username, password, email) {
  return async dispatch => {
    const response = await axios.post(`${Config.server}/user`,{
      body: {
        'username': username,
        'password': password,
        'email': email
      }
    })
    
    const tokenResponse = await getToken(username, password);

    await setToken(tokenResponse.data.access_token, tokenResponse.data.refresh_token)
    NavigationService.navigate('SignUpProcess4');
  }
}

export function signOut() {
  return async dispatch => {
    delete axios.defaults.headers.common['Authorization'];
    await AsyncStorage.clear();
    NavigationService.navigate('Auth');
  };
}

async function getToken(username, password) {
  const response = await axios.post(`${Config.server}/token`,
    qs.stringify({
      username: username,
      password: password,
      client_secret: Config.clientSecret,
      client_id: Config.clientId,
      grant_type: 'password'
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return response;
}

async function setToken(accessToken, refreshToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // 헤더에 토큰 고정
  await AsyncStorage.multiSet([['accessToken', accessToken], ['refreshToken', refreshToken]]); // multiSet 주의
}