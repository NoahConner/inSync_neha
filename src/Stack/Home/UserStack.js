import {createStackNavigator} from '@react-navigation/stack';
import Choose from '../../Screens/HomeScreens/Choose';
import Form from '../../Screens/Authscreens/Form';
const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="choose" component={Choose} />
      <Stack.Screen name="form" component={Form} />
    </Stack.Navigator>
  );
};

export default UserStack;
