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


export default class PostListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <TouchableOpacity 
          style = {styles.postHeaderContainer}
          onPress = {() => NavigationService.navigate('OtherProfile', {
            username: this.props.post.username,
            userId: this.props.post.userId
          })}
        > 
          <Text style = {styles.text}> {this.props.post.username} </Text>
        </TouchableOpacity>
        <View style = {styles.postContentContainer}>
          <Text>
            {this.props.post.content}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  postHeaderContainer: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'gray',
    height: 40,
    paddingLeft: 10,
  },
  postContentContainer: {
    flex: 1,
    backgroundColor: '#F3E9E6',
    height: 100,
    padding: 10,
  }
});