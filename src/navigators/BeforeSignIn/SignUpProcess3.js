import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, TextInput, KeyboardAvoidingView } from 'react-native';
import styles from './styles';

class SignUpProcess3 extends Component {
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
        <Text style = { { fontSize: 17 } }> 프로필 사진 등록 </Text>
        <View style = { [styles.inputStyle, { marginTop: 23 }] }>
          <TextInput
            underlineColorAndroid='transparent'
            autoFocus={true}
            placeholder="닉네임"  
          />
        </View>

        <View style = { styles.buttonStyle }>
          <Button
            title = '회원 가입'
            onPress={() => this.props.navigation.navigate('SignUpProcess4')}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpProcess3;