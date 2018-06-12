import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import NavigationService from '../../../NavigationService';
import { 
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet, 
  Button,
  Text, 
  View, 
  } from 'react-native';


export default class UserListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity 
        style = {styles.container}
        onPress = {() => NavigationService.navigate('OtherProfile', {
          username: this.props.username
        })}
      > 
        <Text style = {styles.text}> {this.props.username} </Text>
      </TouchableOpacity>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    height: 70,
    borderWidth: 0.3,
    borderColor: 'gray',
    paddingLeft: 13,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  }
});