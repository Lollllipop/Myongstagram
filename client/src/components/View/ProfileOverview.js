import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  TextInput,
  Button,
  Text, 
  View, 
  } from 'react-native';


export default class ProfileOverview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style = {styles.container}>
        <View style = {styles.leftContainer}>
          <Ionicons 
            name = "ios-person-outline" 
            size = {77} 
            color = "black"
          />
        </View>
        <View style = {styles.rightContainer}> 
          <Text style = {{fontSize: 16}}> 갯수를 넣어야 함 여기다 </Text> 
          <Text style = {{fontSize: 16}}> 게시물 </Text>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'center',
    // width: 300,
    height: 130,
    backgroundColor: 'white'
  },
  leftContainer: {
    width: 110,
    alignItems: 'center',
    paddingLeft: 22
  },
  rightContainer: {
    flex: 1,
    alignItems: 'center',
  }
});