import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  StyleSheet, 
  Button,
  Text, 
  View, 
  } from 'react-native';
import styles from './styles';
import { getCurrentUser } from '../../actions';
import { FontAwesome } from '@expo/vector-icons';

class PostListScreen extends Component {
  static navigationOptions = {
    title: 'Myongstagram',
    headerLeft: <FontAwesome 
      name = "camera" 
      size = {25} 
      color = "black"
      style = {{marginLeft: 13}}
    />,
    headerTitleStyle: {
      textAlign: 'center',
      alignSelf:'center',
      width: '70%',
    },
    headerStyle: {
      backgroundColor: '#FBFBFB'
    },
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    return (
      <View>
        <Text> PostList </Text>
        <Button
         title = '유저 프로필!'
         onPress = {() => {
           this.props.navigation.navigate('OtherProfile');
          }}
        />
        <Button
         title = '댓글!'
         onPress = {() => this.props.navigation.navigate('Comment')}
        />
      </View>
    );
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      getCurrentUser,
    },
    dispatch);
}

export default connect(null, mapDispatchToProps)(PostListScreen);
