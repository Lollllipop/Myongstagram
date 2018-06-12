import React, { Component } from 'react';
import axios from 'axios';
import { Config } from '../../config';
import { connect } from 'react-redux';
import { FontAwesome } from '@expo/vector-icons';
import { 
  KeyboardAvoidingView, 
  TouchableOpacity, 
  StyleSheet, 
  TextInput,
  Button,
  Alert,
  Text, 
  View,
  } from 'react-native';
import styles from './styles';


class WriteScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: '글 작성',
      headerRight: 
        <TouchableOpacity
          style = {styles.buttonStyle}
          onPress = {navigation.getParam('postHandler')}
        >
          <Text style = {styles.textStyle}>
            게시
          </Text> 
        </TouchableOpacity>,
      headerStyle: {
        backgroundColor: '#FBFBFB'
      },
    }
  };

  componentDidMount() {
    this.props.navigation.setParams({
      postHandler: this._postHandler.bind(this),
    });
  }

  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  render() {
    return (
      <KeyboardAvoidingView
        style = {styles.container}
        behavior = 'padding'
        keyboardVerticalOffset = {0}
      >
        <View style = {innerStyles.container}>
          <TextInput
            style = {{fontSize: 18}}
            onChangeText = {(text) => this.setState({content: text})}
            value = {this.state.content}
            multiline = {true}
            underlineColorAndroid = 'transparent'
            placeholder = "글을 작성해 주세요"  
          />
        </View>
      </KeyboardAvoidingView>
    );
  }

  _postHandler() {
    axios.post(`${Config.server}/api/post`, {
      'content': this.state.content,
      'userId': this.props.userId
    });
    this.setState({content: ''});
    Alert.alert('작성 완료');
  }
  
}


const innerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
});


function mapStateToProps(state) {
  return {
    username: state.MyProfileReducer.username,
    userId: state.MyProfileReducer.userId,
  };
}

export default connect(mapStateToProps, null)(WriteScreen);
