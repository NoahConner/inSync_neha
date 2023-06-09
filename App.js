import React, {useEffect, memo, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext, AppProvider, useAppContext} from './src/Context/AppContext';
import Auth from './src/Stack/Auth';
// import Home from './src/Stack/Home/HomeStack';
import BottomTabs from './src/BottomTab';

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

const AppContent = memo(() => {
  const context = useContext(AppContext);
  useEffect(() => {
    context.setToken(null);
  }, []);

  const {token} = useAppContext(AppContext);

  return (
    <NavigationContainer>
      {token != null ? <BottomTabs /> : <Auth />}
    </NavigationContainer>
  );
});
