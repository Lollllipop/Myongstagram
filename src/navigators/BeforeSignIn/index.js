import { createStackNavigator } from 'react-navigation';
import SignIn from './SignIn';
import Start from './Start';
import SignUpProcess1 from './SignUpProcess1';
import SignUpProcess2 from './SignUpProcess2';
import SignUpProcess3 from './SignUpProcess3';
import SignUpProcess4 from './SignUpProcess4';
import AfterSignIn from '../AfterSignIn';


export default BeforeSignIn = createStackNavigator (
  {
    Start: Start,
    SignIn: SignIn,
    SignUpProcess1: SignUpProcess1,
    SignUpProcess2: SignUpProcess2,
    SignUpProcess3: SignUpProcess3,
    SignUpProcess4: SignUpProcess4,
    AfterSignIn: AfterSignIn
  },
  {
    initialRouteName: 'Start',
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#FBFBFB',
        elevation: 0
      },
    }
  }
)