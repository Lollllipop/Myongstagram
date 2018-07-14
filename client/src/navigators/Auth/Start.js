import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button, 
  Text, 
  View, 
  } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { connect } from 'react-redux';
import { facebookSignIn } from '../../actions';
import styles from './styles';

class StartScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: null,
    }
  };

  render() {
    return (
      <View style = {styles.container}>
        <Text style = {{fontSize: 35}} > Myongstagram </Text>
        <Text> 친구들의 사진과 동영상을 보려면 가입하세요!! </Text>
        <View style = {{marginTop: 50, width: 260}}>
          <Button
            title = 'Facebook 로그인'
            onPress = {() => this.props.facebookSignIn()}
          />
        </View>
        <Text> 또는 </Text>
        <View style = {{width: 260}}>
          <Button
            title = '이메일로 가입하기'
            onPress = {() => this.props.navigation.navigate('SignUpProcess1')}
          />
        </View>
        <View style = {{marginTop: 12, width: 260}}>
          <Button
            title = '이미 계정이 있으신가요?  로그인'
            onPress = {() => this.props.navigation.navigate('SignIn')}
          />
        </View>
      </View>
    );
  }
}

export default connect(null, { facebookSignIn })(StartScreen);