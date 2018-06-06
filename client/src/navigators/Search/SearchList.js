import React, { Component } from 'react';
import { 
  StyleSheet, 
  TextInput,
  Button,
  Text,
  View, 
  } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';

class SearchListScreen extends Component {
  static navigationOptions = {
    headerLeft:
    <View style = {styles.searchInputStyle}> 
      <TextInput
        style = {{flex:1, fontSize: 18, paddingLeft: 10}}
        underlineColorAndroid = 'transparent'
        placeholder = "검색"  
      />
      <Ionicons 
        style = {{ paddingLeft: 10, paddingRight: 10 }}
        name = "ios-close" 
        size = {32} 
        color = "black" 
      />
    </View>,
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf:'center',
      width: '70%',
    },
    headerStyle: {
      backgroundColor: '#FBFBFB'
    },
  };

  render() {
    return (
      <View>
        <Text> PostList </Text>
        <Button
         title = '유저 프로필!'
         onPress={() => {
           this.props.navigation.navigate('OtherProfile');
          }}
        />
        <Button
         title = '댓글!'
         onPress={() => this.props.navigation.navigate('Comment')}
        />
      </View>
    );
  }
}

export default SearchListScreen;