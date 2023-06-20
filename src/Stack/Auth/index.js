import {createStackNavigator} from '@react-navigation/stack';
import Start from '../../Screens/Authscreens/Start';
import Login from '../../Screens/Authscreens/Login';
import SignUp from '../../Screens/Authscreens/SignUp';
import Forgot from '../../Screens/Authscreens/ForgotPass';
import Reset from '../../Screens/Authscreens/Reset';
import Form from '../../Screens/Authscreens/Form';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="reset" component={Reset} />
      <Stack.Screen name="form" component={Form} />
      <Stack.Screen name="forgot" component={Forgot} />
    </Stack.Navigator>
  );
};

export default AuthStack;
