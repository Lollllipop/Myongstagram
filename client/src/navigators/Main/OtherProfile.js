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
  static navigationOptions = ({navigation}) => {
    const title = navigation.getParam('username', 'NO-USERNAME');
    return {
      title: title,
      headerStyle: {
        backgroundColor: '#FBFBFB'
      }
    }
  };

  render() {
    return (
      <View>
        <ProfileOverview/>
      </View>
    );
  }
}

export default OtherProfileScreen;