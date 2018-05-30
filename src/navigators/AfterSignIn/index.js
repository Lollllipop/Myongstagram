import { createBottomTabNavigator  } from 'react-navigation';
import React, { Component } from 'react';
import Main from '../Main';
import { FontAwesome } from '@expo/vector-icons';
// import Search from '../Search';
// import Post from '../Post';
// import MyProfile from '../MyProfile';

AfterSigInStack = createBottomTabNavigator (
  {
    Main: Main,
    // Search: Search,
    // Post: Post,
    // MyProfile: MyProfile,
  },
  {
    initialRouteName: 'Main',
    navigationOptions: ({ navigation }) => {
      // 댓글 컴포넌트의 경우 아래 tab bar가 필요하지 않으므로 제거
      const isTabBarVisible = (navigation.state.routes[1] && navigation.state.routes[1].routeName === 'Comment') ? false : true; 
      return { tabBarVisible: isTabBarVisible }
    }
  }
)

export default class AfterSignIn extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <AfterSigInStack/>
    );
  }
}

