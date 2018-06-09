import React, { Component } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import validator from 'validator';
import axios from 'axios';
import { Config } from '../../config';
import { 
  KeyboardAvoidingView,
  TouchableHighlight,
  StyleSheet, 
  TextInput,
  Button,
  Modal,
  Text, 
  View, 
  } from 'react-native';
import styles from './styles';


class SignUpProcess2Screen extends Component {
  static navigationOptions = {
      title: '회원가입',
  };

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isUsername: false,
      isPassword: false,
      modalVisible: false
    };
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    const email = this.props.navigation.getParam('email', 'NO-EMAIL');

    return (
      <KeyboardAvoidingView 
        style = {styles.container}
        behavior = 'padding'
        keyboardVerticalOffset = {0}
      >
        <View>
          <Modal
            style = {{
              flex: 0,
            }}
            animationType="fade"
            transparent={true}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style = {{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <View style = {{
                width: 250,
                height: 100,
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'white',
                opacity: 3,
                elevation: 5
              }}
              >
                <Text style = {{fontSize: 16}}> 이미 사용중인 닉네임 입니다. </Text>
                <TouchableHighlight
                  style = {{marginTop: 16, paddingTop: 5}}
                  onPress={() => {
                    this.setModalVisible(!this.state.modalVisible);
                  }}>
                  <Text style = {{fontSize: 16}}> 닫기 </Text>
                </TouchableHighlight>
              </View>
            </View>
          </Modal>
        </View>
        <Text style = {{fontSize: 17}}> 닉네임 및 비밀번호 </Text>
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
            value = {this.state.username}
            underlineColorAndroid = 'transparent'
            autoFocus = {true}
            placeholder = " 닉네임"  
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
            onChangeText = {(password) => {
              const isPassword = validator.isLength(password, {min: 6});
              this.setState({ 
                password: password,
                isPassword: isPassword
              })
            }}
            value = {this.state.password}
            style = {styles.inputStyle}
            underlineColorAndroid = 'transparent'
            placeholder = " 비밀번호 (6글자 이상)"
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
            title = '다음'
            disabled = {!this.state.isUsername || !this.state.isPassword}
            onPress = {async () => {
              const isTakenUsername = await axios.get(`${Config.server}/user`,{
                params: {
                  username: this.state.username
                }
              });

              if (isTakenUsername.data) {
                this.setModalVisible(true)
              } else {
                this.props.navigation.navigate('SignUpProcess3', {
                  email: email,
                  username: this.state.username,
                  password: this.state.password
                })
              }
            }}
          />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

export default SignUpProcess2Screen;