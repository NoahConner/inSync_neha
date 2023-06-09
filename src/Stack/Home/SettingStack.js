import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const SettingStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}></Stack.Navigator>
  );
};

export default SettingStack;
