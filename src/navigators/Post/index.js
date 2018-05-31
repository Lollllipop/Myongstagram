import { createStackNavigator  } from 'react-navigation';
import Write from './Write';

export default Post = createStackNavigator (
  {
    Write: Write,
  },
  {
    initialRouteName: 'Write',
    navigationOptions: {
    }
  }
)