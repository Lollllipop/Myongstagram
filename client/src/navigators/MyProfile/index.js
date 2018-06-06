import { createStackNavigator  } from 'react-navigation';
import ProfileScreen from './Profile';
import ProfileEditScreen from './ProfileEdit';
import PasswordEditScreen from './PasswordEdit';

export default MyProfileStack = createStackNavigator (
  {
    Profile: ProfileScreen,
    ProfileEdit: ProfileEditScreen,
    PasswordEdit: PasswordEditScreen,
  },
  {
    initialRouteName: 'Profile',
    navigationOptions: {
    }
  }
)