import React, { Component } from 'react';
import NavigationService from '../../../NavigationService';
import { 
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet, 
  Button,
  Text, 
  View, 
  } from 'react-native';


export default class UserPostListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TouchableOpacity 
        style = {styles.container}
        // onPress = {() => NavigationService.navigate('OtherProfile', {
        //   username: this.props.post.username
        // })}  
      >
        <Text>
          {this.props.post.content}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    marginTop: 10,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    height: 100,
    padding: 10,
  },
});