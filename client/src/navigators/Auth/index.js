import { createStackNavigator } from 'react-navigation';
import SignInScreen from './SignIn';
import StartScreen from './Start';
import SignUpProcess1Screen from './SignUpProcess1';
import SignUpProcess2Screen from './SignUpProcess2';
import SignUpProcess3Screen from './SignUpProcess3';
import SignUpProcess4Screen from './SignUpProcess4';


export default AuthStack = createStackNavigator (
  {
    Start: StartScreen,
    SignIn: SignInScreen,
    SignUpProcess1: SignUpProcess1Screen,
    SignUpProcess2: SignUpProcess2Screen,
    SignUpProcess3: SignUpProcess3Screen,
    SignUpProcess4: SignUpProcess4Screen,
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