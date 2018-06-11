import { createStackNavigator  } from 'react-navigation';
import ProfileScreen from './Profile';
import ProfileEditScreen from './ProfileEdit';
import PasswordEditScreen from './PasswordEdit';
import ConfigScreen from './Config';

export default MyProfileStack = createStackNavigator (
  {
    Profile: ProfileScreen,
    ProfileEdit: ProfileEditScreen,
    PasswordEdit: PasswordEditScreen,
    Config: ConfigScreen,
  },
  {
    initialRouteName: 'Profile',
    navigationOptions: {
    }
  }
)