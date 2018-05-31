import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import styles from './styles';

class Profile extends Component {
  static navigationOptions = {
    // title: '닉네임 받아온 것 입력',
    headerLeft: '닉네임',
    // headerRight: '하이',
    headerStyle: {
      backgroundColor: '#FBFBFB'
    }
  };

  render() {
    return (
      <View>
        <Text> Profile </Text>
        <Button
          title = '프로필 수정'
          onPress={() => this.props.navigation.navigate('ProfileEdit')}
        />
      </View>
    );
  }
}

export default Profile;