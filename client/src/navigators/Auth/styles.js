import { StyleSheet } from 'react-native';

/**
 * 공통되는 style들은 여기에 모으자.
 */
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
  }
});