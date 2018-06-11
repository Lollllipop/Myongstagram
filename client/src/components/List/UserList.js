import React, { Component } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  KeyboardAvoidingView,
  StyleSheet, 
  FlatList,
  Button,
  Text, 
  View, 
  } from 'react-native';
import UserListItem from '../View/UserListItem';
import { getUsers, clearReducer } from '../../actions';


class UserList extends Component {
  constructor(props) {
    super(props);
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
          data = {this.props.users} // 1. 데이터를 주고
          renderItem = {this._renderItem} // 2. 위의 데이터로 렌더링
          keyExtractor = {item => item.username}
        />
      );
    }
  }

  _renderItem = ({item}) => { // 3. 하나씩 렌더링
    return (
      <UserListItem username = {item.username}/>
    );
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
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);