import React, {useEffect, memo, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext, AppProvider, useAppContext} from './src/Context/AppContext';
import Auth from './src/Stack/Auth';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text} from 'react-native';
import RNBootSplash from 'react-native-bootsplash';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Home from './src/Stack/Home/HomeStack';
import BottomTab from './src/BottomTab';

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

const MainStack = createStackNavigator();
const AppContent = () => {
  const {token, setToken} = useAppContext(AppContext);
  useEffect(() => {
    const init = async () => {
      let tokenn = await AsyncStorage.getItem('userToken');
      setToken(tokenn);
    };

    init().finally(async () => {
      await RNBootSplash.hide({fade: true, duration: 500});
      console.log('BootSplash has been hidden successfully');
    });
  }, []);

  return (
    <NavigationContainer>
      <MainStack.Navigator screenOptions={{headerShown: false}}>
        {!token ? (
          <MainStack.Screen name="AuthStack" component={Auth} />
        ) : (
          <MainStack.Screen name="BottomTabs" component={BottomTab} />
        )}
      </MainStack.Navigator>
      {/* {<BottomTab />} */}
    </NavigationContainer>
  );
};
