import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();
import Notification from '../../Screens/HomeScreens/Notification';
import Reminder from '../../Screens/HomeScreens/Notification/Reminder';

const NotificationStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="notification" component={Notification} />
      <Stack.Screen name="reminder" component={Reminder} />
    </Stack.Navigator>
  );
};

export default NotificationStack;
