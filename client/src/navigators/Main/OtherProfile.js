import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button,
  Text, 
  View, 
  } from 'react-native';
import styles from './styles';
import ProfileOverview from '../../components/View/ProfileOverview';

class OtherProfileScreen extends Component {
  static navigationOptions = {
    title: '닉네임 받아온 것 입력',
    headerStyle: {
      backgroundColor: '#FBFBFB'
    }
  };

  render() {
    return (
        <ProfileOverview/>
    );
  }
}

export default OtherProfileScreen;