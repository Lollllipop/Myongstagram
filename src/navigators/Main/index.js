import { createStackNavigator  } from 'react-navigation';
import PostList from './PostList';
import OtherProfile from './OtherProfile';
import Comment from './Comment';

export default Main = createStackNavigator (
  {
    PostList: PostList,
    OtherProfile: OtherProfile,
    Comment: Comment,
  },
  {
    initialRouteName: 'PostList',
    navigationOptions: {
    }
  }
)