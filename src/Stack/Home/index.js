import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/HomeScreens/Home';
import Profile from '../../Screens/HomeScreens/Home';
import Setting from '../../Screens/HomeScreens/Home';
import Notification from '../../Screens/HomeScreens/Home';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Setting" component={Setting} />
      <Stack.Screen name="Notification" component={Notification} />
    </Stack.Navigator>
  );
};

export default AuthStack;
