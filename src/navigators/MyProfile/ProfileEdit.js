import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

class ProfileEdit extends Component {
  static navigationOptions = {
    title: '댓글',
    headerStyle: {
      backgroundColor: '#FBFBFB'
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        style = { styles.commentViewStyle }
        behavior = 'height'
        keyboardVerticalOffset = {82} // 이것으로 textInput 위로 올려주는 기능 하고 있는데 조금 불안
      >
        <Text> Comment </Text>
        <View style = { styles.commentInputStyle }>
          <TextInput
            style = {{flex:1}}
            multiline = {true}
            underlineColorAndroid = 'transparent'
            numberOfLines = {5}
            placeholder = "댓글 달기..."  
          />
          <Button
            title = '게시'
          />
        </View> 
      </KeyboardAvoidingView> 
    );
  }
}

export default ProfileEdit;