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
import { connect } from 'react-redux';
import { signOut } from '../../actions';

class AuthLoadingScreen extends React.Component {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  _bootstrapAsync = async () => { 
    const accessToken = await AsyncStorage.getItem('accessToken'); 
    
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // axios를 사용해 콜을 할 때 항상 토큰을 header에 달아준다.
      try {
        const response = await axios.get(`${Config.server}/api`);

        if (response.data == 'Successfully authenticate') {
          this.props.navigation.navigate('App');
        } else if (response.data == 'Expired token') {
          const refreshToken = await AsyncStorage.getItem('refreshToken');
          const response = await axios.post(`${Config.server}/auth/token`, {
            'refreshToken': refreshToken,
          });

          if (response.data.accessToken) {
            const accessToken = response.data.accessToken;
          
            axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
            await AsyncStorage.setItem('accessToken', accessToken);
            this.props.navigation.navigate('App');
          } else {
            this.props.signOut();
          }
        } else {
          this.props.signOut();
        }

      } catch(err) {
        this.props.signOut();
      } 
    } else {
      this.props.signOut();
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

export default connect(null, { signOut })(AuthLoadingScreen);