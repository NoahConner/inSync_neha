import {createStackNavigator} from '@react-navigation/stack';
import Start from '../../Screens/Authscreens/Start';
import Login from '../../Screens/Authscreens/Login';
import SignUp from '../../Screens/Authscreens/SignUp';
import Forgot from '../../Screens/Authscreens/ForgotPass';
import Reset from '../../Screens/Authscreens/Reset';
import Choose from '../../Screens/HomeScreens/Choose';
import Form from '../../Screens/HomeScreens/Form';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot" component={Forgot} />
      <Stack.Screen name="Reset" component={Reset} />
      <Stack.Screen name="choose" component={Choose} />
      <Stack.Screen name="form" component={Form} />
    </Stack.Navigator>
  );
};

export default AuthStack;
