import React, {useEffect, memo, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext, AppProvider, useAppContext} from './src/Context/AppContext';
import Auth from './src/Stack/Auth';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';

// import Home from './src/Stack/Home/HomeStack';
import BottomTab from './src/BottomTab';

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}
const Appqq = () => {
  return (
    <View>
      <Text>kjfsd</Text>
    </View>
  );
};
const MainStack = createStackNavigator();
const AppContent = () => {
  const {token} = useAppContext(AppContext);
  // const context = useContext(AppContext);
  useEffect(() => {
    console.log(token, 'app');
  }, [token]);

  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        {token === null ? (
          <MainStack.Screen name="AuthStack" component={Auth} />
        ) : (
          <MainStack.Screen name="BottomTabs" component={BottomTab} />
        )}
      </MainStack.Navigator>
      {/* {<BottomTab />} */}
    </NavigationContainer>
  );
};
