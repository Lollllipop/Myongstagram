import React, { Component } from 'react';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput,
  Button,
  Text, 
  View, 
  } from 'react-native';
import styles from './styles';

class SignInScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '로그인'
    }
  };

  render() {
    return (
      <KeyboardAvoidingView 
        style = {styles.container}
        behavior ='padding'
        keyboardVerticalOffset = {0}
      >
        <Text style = {{fontSize: 30}}> Myongstagram </Text>
        <View style = {[styles.inputStyle, {marginTop: 23}]}>
          <TextInput
            underlineColorAndroid = 'transparent'
            autoFocus = {true}
            placeholder = "전화번호, 이메일, 닉네임"  
          />
        </View>
        <View style = {styles.inputStyle}>
          <TextInput
            underlineColorAndroid = 'transparent'
            placeholder = "비밀번호"  
          />
        </View>
        <View style = {styles.buttonStyle}>
          <Button
            title = '로그인'
            onPress = {() => this.props.navigation.navigate('App')}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignInScreen;