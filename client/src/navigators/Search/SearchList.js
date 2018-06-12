import React, { Component } from 'react';
import { SearchBar } from 'react-native-elements';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { 
  StyleSheet, 
  TextInput,
  FlatList,
  Button,
  Text,
  View, 
  } from 'react-native';
import styles from './styles';
import UserList from '../../components/List/UserList';
import { 
  getUsers,
  getSearchUsers, 
  clearReducer, 
} from '../../actions';


class SearchListScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerLeft:
        <View style = {styles.searchInputStyle}> 
          <SearchBar 
            onChangeText = {(data) => {
              if (data) {
                navigation.getParam('searchHandler')(true, data); // access global state inside navigation header
                navigation.getParam('getSearchUsers')(data);
              } else {
                navigation.getParam('searchHandler')(false, data); 
                navigation.getParam('getUsers')();
              }
            }}
            style = {{flex: 1}}
            placeholder = "검색" 
            lightTheme 
            round 
          />
        </View>,
    }
  }

  componentDidMount() {
    this.props.navigation.setParams({
      searchHandler: this._searchHandler.bind(this), // this bind!
      getSearchUsers: this._getSearchUsers.bind(this),
      getUsers: this._getUsers.bind(this),
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      isSearching: false,
      searchKeyword: ''
    }
  }

  render() {
    return (
      <View>
        <UserList isSearching = {this.state.isSearching} keyword = {this.state.searchKeyword}/>
      </View>
    );
  }

  _searchHandler(isSearching, searchKeyword) {
    this.setState({
      isSearching: isSearching,
      searchKeyword: searchKeyword
    })
  }

  _getSearchUsers(data) {
    this.props.getSearchUsers(data);
  }

  _getUsers() {
    this.props.getUsers();
  }
}


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      getUsers,
      getSearchUsers,
      clearReducer,
    },
    dispatch);
}

export default connect(null, mapDispatchToProps)(SearchListScreen);