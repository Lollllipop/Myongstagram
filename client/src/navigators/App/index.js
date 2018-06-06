import { createBottomTabNavigator  } from 'react-navigation';
import React, { Component } from 'react';
import MainStack from '../Main';
import { Foundation, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import SearchStack from '../Search';
import PostStack from '../Post';
import MyProfileStack from '../MyProfile';

export default AppTab = createBottomTabNavigator (
  {
    Main: {
      screen: MainStack,
      navigationOptions: {
        tabBarIcon: <Foundation name="home" size={32} color="black" />
      }
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: <FontAwesome name="search" size={27} color="black" />
      }
    },
    Post: {
      screen: PostStack,
      navigationOptions: {
        tabBarIcon: <FontAwesome name="plus-square" size={30} color="black" />
      }
    },
    MyProfile: {
      screen: MyProfileStack,
      navigationOptions: {
        tabBarIcon: <MaterialIcons name="person" size={32} color="black" />
      }
    }
  },
  {
    initialRouteName: 'Main',
    navigationOptions: ({ navigation }) => {
      // 댓글 컴포넌트의 경우 아래 tab bar가 필요하지 않으므로 제거
      const isTabBarVisible = (navigation.state.routes[1] && navigation.state.routes[1].routeName === 'Comment') ? false : true; 
      return { 
        tabBarVisible: isTabBarVisible,
      }
    },
    tabBarOptions: {
      showLabel: false
    }
  }
)

