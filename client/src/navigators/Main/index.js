import { createStackNavigator  } from 'react-navigation';
import PostListScreen from './PostList';
import OtherProfileScreen from './OtherProfile';
import CommentScreen from './Comment';

export default MainStack = createStackNavigator (
  {
    PostList: PostListScreen,
    OtherProfile: OtherProfileScreen,
    Comment: CommentScreen,
  },
  {
    initialRouteName: 'PostList',
    navigationOptions: {
    }
  }
)