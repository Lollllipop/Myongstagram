import React, { Component } from 'react';
import { 
  StyleSheet, 
  Button,
  Text, 
  View, 
  } from 'react-native';
import styles from './styles';
import ProfileOverview from '../../components/View/ProfileOverview';
import UserPostList from '../../components/List/UserPostList';

class OtherProfileScreen extends Component {
  static navigationOptions = ({navigation}) => {
    const title = navigation.getParam('username', 'NO-USERNAME');
    return {
      title: title,
      headerStyle: {
        backgroundColor: '#FBFBFB'
      }
    }
  };

  render() {
    const userId = this.props.navigation.getParam('userId', 'NO-USERID');

    return (
      <View>
        <ProfileOverview/>
        <UserPostList userId = {userId}/>
      </View>
    );
  }
}

export default OtherProfileScreen;