import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button,
  Text, 
  View,
  } from 'react-native';
import styles from './styles';
import { FontAwesome } from '@expo/vector-icons';

class WriteScreen extends Component {
  static navigationOptions = {
    title: 'Write',
    headerLeft: <FontAwesome 
      name = "camera" 
      size = {25} 
      color = "black"
      style = {{marginLeft: 13}}
    />,
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf:'center',
      width: '70%',
    },
    headerStyle: {
      backgroundColor: '#FBFBFB'
    },
  };

  render() {
    return (
      <View>
        <Text> Write </Text>
      </View>
    );
  }
}

export default WriteScreen;