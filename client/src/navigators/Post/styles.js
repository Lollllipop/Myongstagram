import { StyleSheet } from 'react-native';

/**
 * 공통되는 style들은 여기에 모으자.
 */
export default styles = StyleSheet.create({
  container: { // 다 하얀 배경
    flex: 1,
    backgroundColor: '#FBFBFB',
  },
  buttonStyle: { // 다 파란 빈 버튼에서 다 채워지면 채워진 버튼
    paddingRight: 12,
  },
  textStyle: {
    fontSize: 20,
  }
});