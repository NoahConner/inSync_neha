import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [state, setState] = useState('');
  const [loader, setLoader] = useState('');
  const [token, setToken] = useState(false);
  const [expected, setExpected] = useState(false);
  const [period, setPeriod] = useState(false);
  const [relation, setRelation] = useState(null);
  const [syncRelation, setSyncRelation] = useState(null);

  const contextValues = useMemo(
    () => ({
      state,
      setState,
      loader,
      setLoader,
      token,
      setToken,
      period,
      setPeriod,
      syncRelation,
      setSyncRelation,
      expected,
      setExpected,
      relation,
      setRelation,
    }),
    [
      state,
      setState,
      loader,
      setLoader,
      token,
      setToken,
      period,
      setPeriod,
      expected,
      setExpected,
      relation,
      setRelation,
      syncRelation,
      setSyncRelation,
    ],
  );

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
