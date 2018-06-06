import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  } from 'react-native';
import styles from './styles';

class OtherProfileScreen extends Component {
  static navigationOptions = {
    title: '닉네임 받아온 것 입력',
    headerStyle: {
      backgroundColor: '#FBFBFB'
    }
  };

  render() {
    return (
        <Text> OtherProfile </Text>
    );
  }
}

export default OtherProfileScreen;