import { createSwitchNavigator  } from 'react-navigation';
import AppTab from './App';
import AuthStack from './Auth';
import AuthLoadingScreen from './Auth/AuthLoading';

export default AppNavigator = createSwitchNavigator (
  {
    AuthLoading: AuthLoadingScreen,
    App: AppTab,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
)