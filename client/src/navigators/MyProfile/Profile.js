import React, { Component } from 'react';
import { Ionicons, Entypo } from '@expo/vector-icons';
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


class ProfileScreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('title', '..'),
      headerRight: (
        <Entypo 
          style = {{marginRight: 5}}
          name = "dots-three-vertical" 
          size = {22} 
          color = "black"
          onPress = {() => navigation.navigate('Config')}
        />
      ),
      headerStyle: {
        backgroundColor: '#FBFBFB'
      }
    }
  };

  componentWillMount() {
    this.props.navigation.setParams({title: this.props.username});
  }

  render() {
    return (
      <View>
        <View style = {innerStyles.container}>
          <View style = {innerStyles.leftContainer}>
            <Ionicons 
              name = "ios-person-outline" 
              size = {77} 
              color = "black"
            />
          </View>
          <View style = {innerStyles.rightContainer}> 
            <Text style = {{fontSize: 16}}> 갯수를 넣어야 함 여기다 </Text> 
            <Text style = {{fontSize: 16}}> 게시물 </Text>
            <View style = {innerStyles.buttonStyle}>
              <Button
                title = '프로필 수정'
                onPress = {() => {
                  this.props.navigation.navigate('ProfileEdit')
                }}
              />
            </View>
          </View>
        </View>
        <Text> hello? </Text>
      </View>
    );
  }
}


const innerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
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
  },
  buttonStyle: {
    width: 160,
  }
});


function mapStateToProps(state) {
  return {
    username: state.MyProfileReducer.username,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    { 
      getCurrentUser,
    },
    dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen);