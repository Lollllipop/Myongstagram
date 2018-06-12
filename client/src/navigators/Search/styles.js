import { StyleSheet, Dimensions } from 'react-native';

/**
 * 공통되는 style들은 여기에 모으자.
 */

var width = Dimensions.get('window').width;

export default styles = StyleSheet.create({
  container: { // 다 하얀 배경
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: { // 다 파란 빈 버튼에서 다 채워지면 채워진 버튼
    width: 260,
    marginTop: 12
  },
  inputStyle: {
    height: 35,
    borderColor: '#AFAFAF',
    borderWidth: 1,
    borderRadius: 3,
    width: 260,
    marginTop: 12
  },
  commentViewStyle: {
    flex: 1,
    backgroundColor: '#FBFBFB',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  commentInputStyle: {
    flexDirection: 'row',
    height: 35,
    borderWidth: 1,
    borderRightWidth: 0,
    borderLeftWidth: 0,
    borderBottomWidth: 0,
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    alignItems: 'flex-end',
  },
  searchInputStyle: {
    flex: 1,
    width: width,
  }
  
});