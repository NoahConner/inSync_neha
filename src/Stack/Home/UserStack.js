import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const UserStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}></Stack.Navigator>
  );
};

export default UserStack;
