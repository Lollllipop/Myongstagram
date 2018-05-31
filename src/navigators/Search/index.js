import { createStackNavigator  } from 'react-navigation';
import SearchList from './SearchList';
import OtherProfile from './OtherProfile';
import Comment from './Comment';

export default Search = createStackNavigator (
  {
    SearchList: SearchList,
    OtherProfile: OtherProfile,
    Comment: Comment,
  },
  {
    initialRouteName: 'SearchList',
    navigationOptions: {
    }
  }
)