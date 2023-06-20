import {createStackNavigator} from '@react-navigation/stack';
import Setting from '../../Screens/HomeScreens/Settings';
import Profile from '../../Screens/HomeScreens/Settings/Profile';
import Help from '../../Screens/HomeScreens/Settings/Help';
import Reset from '../../Screens/Authscreens/Reset';
import Privacy from '../../Screens/HomeScreens/Settings/Privacy';
import Terms from '../../Screens/HomeScreens/Settings/Terms';
const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="help" component={Help} />
      <Stack.Screen name="privacy" component={Privacy} />
      <Stack.Screen name="reset" component={Reset} />
      <Stack.Screen name="terms" component={Terms} />
    </Stack.Navigator>
  );
};

export default SettingStack;
