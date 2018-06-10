import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput,
  Button,
  Text,
  View, 
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { signUp } from '../../actions';
import styles from './styles';


class SignUpProcess3Screen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '회원가입'
    }
  };

  render() {
    const username = this.props.navigation.getParam('username', 'NO-USERNAME');
    const password = this.props.navigation.getParam('password', 'NO-PASSWORD');
    const email = this.props.navigation.getParam('email', 'NO-EMAIL');    

    return (
      <KeyboardAvoidingView 
        style = {styles.container}
        behavior = 'padding'
        keyboardVerticalOffset = {0}
      >
        <Text style = {{fontSize: 17}}> 프로필 사진 등록 </Text>
        <View style = {{ 
          borderWidth: 2, 
          borderColor: 'black', 
          alignItems: 'center', 
          borderRadius: 50, 
          width: 90, 
          height: 90, 
          marginTop: 23, 
          marginBottom: 13 
        }}>
          <Ionicons 
            name = "ios-person-outline" 
            size = {87} 
            color = "black"
          />
        </View>
        <View style = {styles.buttonStyle}>
          <Button
            title = '회원 가입'
            onPress = {() => {
              this.props.signUp(username, password, email)
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      signUp,
    },
    dispatch);
}

export default connect(null, { signUp })(SignUpProcess3Screen);