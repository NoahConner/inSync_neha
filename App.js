import React, {useEffect, memo} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AppContext, AppProvider, useAppContext} from './src/Context/AppContext';
import Auth from './src/Stack/Auth';
import Home from './src/Stack/Home';

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

const AppContent = memo(() => {
  const {token} = useAppContext(AppContext);

  return (
    <NavigationContainer>{token ? <Home /> : <Auth />}</NavigationContainer>
  );
});
