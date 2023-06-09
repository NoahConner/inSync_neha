import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/HomeScreens/Home';
import Profile from '../../Screens/HomeScreens/Home';
import Setting from '../../Screens/HomeScreens/Home';
import Notification from '../../Screens/HomeScreens/Home';
import Choose from '../../Screens/HomeScreens/Choose';
import Form from '../../Screens/HomeScreens/Form';
const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="choose" component={Choose} />
      <Stack.Screen name="form" component={Form} /> */}
      <Stack.Screen name="home" component={Home} />
      {/* <Stack.Screen name="profile" component={Profile} />
      <Stack.Screen name="setting" component={Setting} />
      <Stack.Screen name="notification" component={Notification} /> */}
    </Stack.Navigator>
  );
};

export default HomeStack;
