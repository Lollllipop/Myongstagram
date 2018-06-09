import React, { Component } from 'react';
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
      password: ''
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
        <View style = {[styles.inputStyle, {marginTop: 23}]}>
          <TextInput
            onChangeText = {(username) => this.setState({ username })}
            underlineColorAndroid = 'transparent'
            autoFocus = {true}
            placeholder = "이메일, 닉네임"  
            value = {this.state.username}
          />
        </View>
        <View style = {styles.inputStyle}>
          <TextInput
            onChangeText = {(password) => this.setState({ password })}
            value = {this.state.password}
            underlineColorAndroid = 'transparent'
            placeholder = "비밀번호"  
            secureTextEntry = {true}
          />
        </View>
        <View style = {styles.buttonStyle}>
          <Button
            title = '로그인'
            onPress = {() => this.props.signin(this.state.username, this.state.password)}
            disabled = {!this.state.username || !this.state.password}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

// export default connect(null, { signin })(SignInScreen);
export default SignInScreen;