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
        tabBarIcon: ({tintColor}) => <Foundation name="home" size={32} color={tintColor} />
      }
    },
    Search: {
      screen: SearchStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <FontAwesome name="search" size={27} color={tintColor} />
      }
    },
    Post: {
      screen: PostStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <FontAwesome name="plus-square" size={30} color={tintColor} />
      }
    },
    MyProfile: {
      screen: MyProfileStack,
      navigationOptions: {
        tabBarIcon: ({tintColor}) => <MaterialIcons name="person" size={32} color={tintColor} />
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
      showLabel: false,
      activeTintColor:'black',
    }
  }
)

