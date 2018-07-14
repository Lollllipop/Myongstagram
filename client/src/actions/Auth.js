import axios from 'axios';
import qs from 'qs';
import { AsyncStorage } from 'react-native';
import { Config } from '../config';
import NavigationService from '../../NavigationService';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_UP = 'SIGN_UP';
export const SIGN_OUT = 'SIGN_OUT';
export const FACEBOOK_SIGN_IN = 'FACEBOOK_SIGN_IN';

export function signIn(username, password) {
  return async dispatch => {
    try {
      const [accessToken, refreshToken] = await getToken(username, password);

      await setToken(accessToken, refreshToken)
      NavigationService.navigate('App');
    } catch (err) {
      alert('아이디 또는 비밀번호를 확인하세요.');
    }
  };
}

export function signUp(username, password, email) {
  return async dispatch => {
    await axios.post(`${Config.server}/user`, {
      'username': username,
      'password': password,
      'email': email
    });
    
    const [accessToken, refreshToken] = await getToken(username, password);

    await setToken(accessToken, refreshToken)
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

// TODO: 완성 해야 함
export function facebookSignIn() {
  return async dispatch => {
    const response = await axios.get(`${Config.server}/auth/facebook`);
    console.log(response);
  }
}

async function getToken(username, password) {
  const response = await axios.post(`${Config.server}/auth`,
    qs.stringify({
      username: username,
      password: password,
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
  });

  return [response.data.accessToken, response.data.toBeOutUser.refreshToken];
}

async function setToken(accessToken, refreshToken) {
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // 헤더에 토큰 고정
  await AsyncStorage.multiSet([['accessToken', accessToken], ['refreshToken', refreshToken]]); // multiSet 주의
}