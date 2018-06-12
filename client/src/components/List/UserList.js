import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  KeyboardAvoidingView,
  ActivityIndicator,
  StyleSheet, 
  FlatList,
  Button,
  Text, 
  View, 
  } from 'react-native';
  import UserListItem from '../View/UserListItem';
import { 
  getUsers, 
  clearReducer, 
  getRecentUsers,
  getPriorUsers, 
} from '../../actions';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      prevId: '',
    }
  }
  
  componentDidMount() {
    this.props.getUsers();
  }

  componentWillUnmount() {
    this.props.clearReducer();
  }

  render() {
    if (this.props.users) {
      return (
        <FlatList
          data = {this.props.users} 
          renderItem = {this._renderItem} 
          keyExtractor = {item => String(item.id)}
          refreshing = {this.state.refreshing}
          onRefresh = {this._onRefresh}
          onEndReachedThreshold = {1}
          onEndReached = {this._onEndReached}
          ListFooterComponent = {this._renderFooter}
        />
      );
    }
  }

  _renderItem = ({item}) => { 
    return (
      <UserListItem username = {item.username}/>
    );
  };

  _renderFooter = ({item}) => { 
    return (
      <ActivityIndicator size = 'large'/>
    );
  };

  _onRefresh = async () => { 
    const recentUserId = this.props.users[0].id;

    this.setState({
      refreshing: true
    })

    await this.props.getRecentUsers(recentUserId, this.props.isSearching, this.props.keyword);

    this.setState({
      refreshing: false
    })
  };

  
  _onEndReached = async () => { 
    const lastUserId = this.props.users[this.props.users.length - 1].id;

    this.setState({
      prevId: lastUserId
    })

    if (this.state.prevId !== lastUserId) {
      this.props.getPriorUsers(lastUserId, this.props.isSearching, this.props.keyword);
    }

  };
}


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 130
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


function mapStateToProps(state) {
  return {
    users: state.SearchListReducer.users,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      getUsers, // 끝에 도달했을 때 또 가져오는 함수 필요 / 그냥 뒤에 계속 붙이면 될듯? unmount시 15개만 남기기
      clearReducer,
      getPriorUsers,
      getRecentUsers,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);