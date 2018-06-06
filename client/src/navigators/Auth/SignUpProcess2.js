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

class SignUpProcess2Screen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '회원가입'
    }
  };

  render() {
    return (
      <KeyboardAvoidingView 
        style = {styles.container}
        behavior = 'padding'
        keyboardVerticalOffset = {0}
      >
        <Text style = {{fontSize: 17}}> 닉네임 및 비밀번호 </Text>
        <View style = {[styles.inputStyle, {marginTop: 23}]}>
          <TextInput
            underlineColorAndroid = 'transparent'
            autoFocus = {true}
            placeholder = "닉네임"  
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
            title = '다음'
            onPress = {() => this.props.navigation.navigate('SignUpProcess3')}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpProcess2Screen;