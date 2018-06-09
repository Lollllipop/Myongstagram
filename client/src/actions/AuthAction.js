import axios from 'axios';
import qs from 'qs';
import { AsyncStorage } from 'react-native';
import { Config } from '../config';
// import NavigationService from '../navigation_service';

export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';


export function signIn(username, password) {
  return async dispatch => {
    try {
      // 주의!: OAuth2Server는 x-www-form-urlencoded 만 받는다.
      const response = await getToken(username, password);

      axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.access_token}`; // 헤더에 토큰 고정!
      console.log(`Bearer ${response.data.access_token}`);
      await AsyncStorage.setItem('accessToken', response.data.access_token);
      NavigationService.navigate('App');
    } catch (err) {
      console.log(err.response || err);
      alert('Invalid ID or Password');
    }
  };
}

export function signUp(username, password, email) {
  return async dispatch => {
    const response = await axios.post(`${Config.server}/user`,
      {
        body: {
          'username': username,
          'password': password,
          'email': email
        }
      }
    )

    dispatch({
      type: SIGN_UP, 
      data: {
        username: username,
        email: email,
      }
    });
    
    const response2 = await getToken(username, password);

  }
}

async function getToken(username, password) {
  console.log('hello signIn');
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