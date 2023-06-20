import {createStackNavigator} from '@react-navigation/stack';
import Home from '../../Screens/HomeScreens/Home';
import Profile from '../../Screens/HomeScreens/Home';
import Setting from '../../Screens/HomeScreens/Home';
import Notification from '../../Screens/HomeScreens/Home';
import Choose from '../../Screens/HomeScreens/Choose';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
};

export default HomeStack;
