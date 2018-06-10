import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import validator from 'validator';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput,
  Button,
  Text, 
  View, 
  } from 'react-native';
import { connect } from 'react-redux';
import styles from './styles';
import { signIn } from '../../actions';


class SignInScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '로그인'
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isUsername: false,
      isPassword: false
    };
  }

  render() {
    return (
      <KeyboardAvoidingView 
        style = {styles.container}
        behavior ='padding'
        keyboardVerticalOffset = {0}
      >
        <Text style = {{fontSize: 30}}> Myongstagram </Text>
        <View style = {[styles.inputWrapperStyle, {marginTop: 23}]}>
          <TextInput
            style = {styles.inputStyle}
            onChangeText = {(username) => {
              const isUsername = validator.isLength(username, {min: 1});
              this.setState({ 
                username: username,
                isUsername: isUsername
              })
            }}
            underlineColorAndroid = 'transparent'
            autoFocus = {true}
            placeholder = "이메일, 닉네임"  
            value = {this.state.username}
          />
          <View style = {styles.inputCheckStyle}>
            <FontAwesome 
              name = 'circle' 
              size = {11} 
              color = {this.state.isUsername ? 'green' : 'red'} 
            />
          </View>
        </View>
        <View style = {styles.inputWrapperStyle}>
          <TextInput
            style = {styles.inputStyle}
            onChangeText = {(password) => {
              const isPassword = validator.isLength(password, {min: 6});
              this.setState({ 
                password: password,
                isPassword: isPassword
              })
            }}
            value = {this.state.password}
            underlineColorAndroid = 'transparent'
            placeholder = "비밀번호"  
            secureTextEntry = {true}
          />
          <View style = {styles.inputCheckStyle}>
            <FontAwesome 
              name = 'circle' 
              size = {11} 
              color = {this.state.isPassword ? 'green' : 'red'} 
            />
          </View>
        </View>
        <View style = {styles.buttonStyle}>
          <Button
            title = '로그인'
            onPress = {() => this.props.signIn(this.state.username, this.state.password)}
            disabled = {!this.state.isUsername || !this.state.isPassword}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default connect(null, { signIn })(SignInScreen);