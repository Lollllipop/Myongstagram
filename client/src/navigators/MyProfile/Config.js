import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  TextInput, 
  Button,
  Text, 
  View,    
  } from 'react-native';
import styles from './styles';
import { signOut } from '../../actions';


class ConfigScreen extends Component {
  static navigationOptions = {
    title: '설정',
    headerStyle: {
      backgroundColor: '#FBFBFB'
    }
  };

  render() {
    return (
      <View style = {[styles.container, {justifyContent: 'flex-start'}]}>
        <TouchableOpacity
          style = {innerStyles.container}
          onPress = {() => {
            this.props.signOut();
          }}
        >
          <Text> 로그아웃 </Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style = {innerStyles.container}
        >
          <Text> 비밀번호 </Text>
        </TouchableOpacity> 
      </View> 
    );
  }
}

const innerStyles = StyleSheet.create({
  container: { // 다 하얀 배경
    height: 55,
    backgroundColor: '#FBFBFB',
    alignItems: 'flex-start',
    alignSelf: 'stretch',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: 'gray',
    paddingLeft: 13
  },
});


export default connect(null, { signOut })(ConfigScreen);