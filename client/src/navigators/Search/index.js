import { createStackNavigator  } from 'react-navigation';
import SearchListScreen from './SearchList';
import OtherProfileScreen from './OtherProfile';
import CommentScreen from './Comment';

export default SearchStack = createStackNavigator (
  {
    SearchList: SearchListScreen,
    OtherProfile: OtherProfileScreen,
    Comment: CommentScreen,
  },
  {
    initialRouteName: 'SearchList',
    navigationOptions: {
    }
  }
)