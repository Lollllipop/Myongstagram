import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

class SignUpProcess1 extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: '회원가입'
    }
  };

  render() {
    return (
      <KeyboardAvoidingView 
        style = { styles.container }
        behavior='padding'
        keyboardVerticalOffset={0}
      >
        <Text style = { { fontSize: 17 } }> 전화번호 </Text>
        <View style = { [styles.inputStyle, { marginTop: 23 }] }>
          <TextInput
            underlineColorAndroid='transparent'
            autoFocus={true}
            placeholder="휴대폰"  
          />
        </View>
        <View style = { styles.buttonStyle }>
          <Button
            title = '다음'
            onPress={() => this.props.navigation.navigate('SignUpProcess2')}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpProcess1;