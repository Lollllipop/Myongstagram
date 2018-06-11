import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { SearchBar } from 'react-native-elements'
import { 
  StyleSheet, 
  TextInput,
  FlatList,
  Button,
  Text,
  View, 
  } from 'react-native';
import styles from './styles';
import { Ionicons } from '@expo/vector-icons';
// import { getRandomUsers } from '../../actions';
import UserList from '../../components/List/UserList';

class SearchListScreen extends Component {
  static navigationOptions = {
    headerTitle:
      <SearchBar 
        // style = {{alignSelf: 'stretch', flex: 1}}
        placeholder = "검색" 
        showLoadingIcon
        lightTheme 
        round 
      />,
    // headerTitleStyle: {
    //   flex: 1,
    //   textAlign: 'center',
    //   alignSelf:'stretch',
    // },
    // headerStyle: {
    //   flex: 1,
    //   alignSelf:'stretch',
    //   backgroundColor: '#FBFBFB'
    // },
  };

  // componentDidMount() {
  //   this.props.getCurrentUser();
  // }

  render() {
    return (
      <View>
        <UserList/>
      </View>
    );
  }
}


// function mapStateToProps(state) {
//   return {
//     users: state.SearchListReducer.users,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators(
//     { 
//       getRandomUsers, // 15개? 가져오는 함수 필요
//     },
//     dispatch);
// }

// export default connect(mapStateToProps, mapDispatchToProps)(SearchListScreen);
export default SearchListScreen;