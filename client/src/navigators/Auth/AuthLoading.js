import React from 'react';
import axios from 'axios';
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
    // 토큰을 AsyncStorage에 관리할 것. 
    const accessToken = await AsyncStorage.getItem('accessToken'); 
    console.log(accessToken);
    // 유저 토큰이 제대로된 토큰인지 확인을 해야하는것 아닌가?
    // 안해도 되는 이유가 차피 첫 화면을 들어가더라도 api콜이 필요하며 거기서 토큰이 필요하고 토큰이 알맞지 않으면 logout 처리 해버릴 것이기 때문이다.
    if (accessToken) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`; // axios를 사용해 콜을 할 때 항상 토큰을 header에 달아준다.
    }
    this.props.navigation.navigate(accessToken ? 'App' : 'Auth');
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