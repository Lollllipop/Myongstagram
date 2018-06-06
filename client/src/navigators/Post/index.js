import { createStackNavigator  } from 'react-navigation';
import WriteScreen from './Write';

export default PostStack = createStackNavigator (
  {
    Write: WriteScreen,
  },
  {
    initialRouteName: 'Write',
    navigationOptions: {
    }
  }
)