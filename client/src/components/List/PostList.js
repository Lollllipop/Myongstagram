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
  import PostListItem from '../View/PostListItem';
import { 
  getPosts, 
  clearReducer, 
  getRecentPosts,
  getPriorPosts, 
} from '../../actions';


class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      prevId: '',
    }
  }
  
  componentDidMount() {
    this.props.getPosts();
  }

  componentWillUnmount() {
    this.props.clearReducer();
  }

  render() {
    if (this.props.posts) {
      return (
        <FlatList
          data = {this.props.posts} 
          renderItem = {this._renderItem} 
          keyExtractor = {item => String(item.id)}
          refreshing = {this.state.refreshing}
          onRefresh = {this._onRefresh}
          onEndReachedThreshold = {0.5}
          onEndReached = {this._onEndReached}
          ListFooterComponent = {this._renderFooter}
        />
      );
    }
  }

  _renderItem = ({item}) => <PostListItem post = {item}/>

  _onRefresh = async () => { 
    const recentPostId = this.props.posts[0].id;

    this.setState({
      refreshing: true
    })

    await this.props.getRecentPosts(recentPostId);

    this.setState({
      refreshing: false
    })
  };

  
  _onEndReached = async () => { 
    if (this.props.posts.length >= 10) {
      const lastPostId = this.props.posts[this.props.posts.length - 1].id;

      this.setState({
        prevId: lastPostId
      })
  
      if (this.state.prevId !== lastPostId) {
        this.props.getPriorPosts(lastPostId);
      }
    }
  };

  _renderFooter = ({item}) => <ActivityIndicator size = 'large'/>
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
    posts: state.PostListReducer.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      getPosts,
      clearReducer, 
      getRecentPosts,
      getPriorPosts,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);