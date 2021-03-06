import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  ActivityIndicator,
  StyleSheet, 
  FlatList,
  Button,
  Text, 
  View, 
  } from 'react-native';
  import UserPostListItem from '../View/UserPostListItem';
import { 
  getUserPosts, 
  clearReducer, 
} from '../../actions';


class UserPostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      prevId: '',
    }
  }
  
  componentDidMount() {
    this.props.getUserPosts(this.props.userId); // userId가 들어가야 함
  }

  render() {
    if (this.props.posts) {
      return (
        <FlatList
          data = {this.props.posts} 
          renderItem = {this._renderItem} 
          keyExtractor = {item => String(item.id)}
        />
      );
    }
  }

  _renderItem = ({item}) => { 
    return (
      <UserPostListItem post = {item}/>
    );
  };
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 130
  },
});


function mapStateToProps(state) {
  return {
    posts: state.UserPostListReducer.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      getUserPosts,
      clearReducer, 
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserPostList);