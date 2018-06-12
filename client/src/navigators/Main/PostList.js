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
import PostList from '../../components/List/PostList';


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
        <PostList/>
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
