import { createStackNavigator  } from 'react-navigation';
import Profile from './Profile';
import ProfileEdit from './ProfileEdit';
import PasswordEdit from './PasswordEdit';

export default MyProfile = createStackNavigator (
  {
    Profile: Profile,
    ProfileEdit: ProfileEdit,
    PasswordEdit: PasswordEdit,
  },
  {
    initialRouteName: 'Profile',
    navigationOptions: {
    }
  }
)