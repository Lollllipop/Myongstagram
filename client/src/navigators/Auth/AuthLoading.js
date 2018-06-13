import React from 'react';
import axios from 'axios';
import { Config } from '../../config';
import {
  ActivityIndicator,
  AsyncStorage,
  StatusBar,
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => { 
    const accessToken = await AsyncStorage.getItem('accessToken'); 
    
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // axios를 사용해 콜을 할 때 항상 토큰을 header에 달아준다.
      try {
        await axios.get(`${Config.server}/api`);
        this.props.navigation.navigate('App');
      } catch(err) {
        await AsyncStorage.clear();
        if (err.response.status == 401) {
          this.props.navigation.navigate('Auth');
        } else {
          this.props.navigation.navigate('Auth');
          // alert('Network Error');
        }
      } 
    } else {
      this.props.navigation.navigate('Auth');
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
        <StatusBar barStyle="default" />
      </View>
    );
  }
}