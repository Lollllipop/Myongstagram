import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './styles';

class OtherProfile extends Component {
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

export default OtherProfile;