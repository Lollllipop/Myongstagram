import React, { Component } from 'react';
import BeforeSignIn from './src/navigators/BeforeSignIn';

class App extends Component {
  render() {
    return (
      <BeforeSignIn/>
    );
  }
}

/**
 * navigate('뷰이름') : 원하는 뷰로 바로 이동
 * push('뷰이름') : 같은 뷰여도 중복 이동 가능하게 만듬
 * pop() = goBack() : 한 스택 빼기(뒤로)
 * popToTop() : 루트 스택으로 이동!
 * 
 * 파라미터 넘기기 : navigate()에 추가적인 인자를 넘긴다.
 * 파라미터 받기 : getParam()으로 받고 안 넘어올 경우를 대비해서 default값 설정 가능
 * 
 */


/**
 * 네비게이터를 가지고 라우트 하는 것
 * Home, Details 이런것들 각각을 stack이라고 나타냄
 * 이 네비게이터에 연결된 각각의 스택은 모두 props에 navigation prop을 가지게 된다.
 * 이것을 통해 각 스택끼리의 이동을 가능하게 해줌
 * 
 * 하나의 메인 stack을 두고 그 뒤 과정이나 등등의 뷰가 필요한 경우
 * navigator와 stack을 이용해 하나의 RootStack을 만들어
 * 여러 이와 관련된 스택들을 넣고 그 안에서 이동할 수 있도록 만들면 될 듯
 */


export default App;