import React, { Component } from 'react';
import validator from 'validator';
import { FontAwesome } from '@expo/vector-icons';
import {
  KeyboardAvoidingView,  
  StyleSheet, 
  TextInput,
  Button,
  Text, 
  View, 
} from 'react-native';
import styles from './styles';

class SignUpProcess1Screen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '회원가입',
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      isEmail: false,
    };
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style = {styles.container}
        behavior = 'padding'
        keyboardVerticalOffset = {0}
      >
        <Text style = {{fontSize: 17}}> 이메일 </Text>
        <View style = {[styles.inputWrapperStyle, {marginTop: 23}]}>
          <TextInput
            style = {styles.inputStyle}
            onChangeText = {(email) => {
              const isEmail = validator.isEmail(email);
              this.setState({ 
                email: email,
                isEmail: isEmail
              })
            }}
            underlineColorAndroid = 'transparent'
            autoFocus = {true}
            placeholder = ' 이메일'
            keyboardType = 'email-address'
            value = {this.state.email}
          />
          <View style = {styles.inputCheckStyle}>
            <FontAwesome 
              name = 'circle' 
              size = {11} 
              color = {this.state.isEmail ? 'green' : 'red'} 
            />
          </View>
        </View>
        <View style = {styles.buttonStyle}>
          <Button
            title = '다음'
            disabled = {!this.state.isEmail}
            onPress = {() => {
              this.props.navigation.navigate('SignUpProcess2', {
                email: this.state.email
              })
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpProcess1Screen;