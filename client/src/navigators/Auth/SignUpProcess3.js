import React, { Component } from 'react';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput,
  Button,
  Text,
  View, 
  } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

class SignUpProcess3Screen extends Component {
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
            onPress={() => this.props.navigation.navigate('SignUpProcess4')}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpProcess3Screen;