import {StyleSheet, Platform, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {moderateScale} from 'react-native-size-matters';
import HomeStack from '../Stack/Home/HomeStack';
import SettingStack from '../Stack/Home/SettingStack';
import UserStack from '../Stack/Home/UserStack';
import NotificationStack from '../Stack/Home/NotificationStack';
import Icon from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from 'react-native-vector-icons/Foundation';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {backgroundColor} from '../Constants';

const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: Platform.OS !== 'ios',
        tabBarStyle: [
          {
            display: 'flex',
            backgroundColor: backgroundColor,
            width: '100%',
            height:
              Platform.OS == 'ios'
                ? moderateScale(90, 0.1)
                : moderateScale(60, 0.1),
            elevation: 0,
          },
          null,
        ],

        tabBarShowLabel: false,
      }}>
      <Tab.Screen
        name={'HomeStack'}
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View
              style={
                focused
                  ? {
                      //   shadowColor: 'black',
                      shadowOpacity: 5,
                      borderWidth: 1,
                      borderRadius: 30,
                    }
                  : null
              }>
              <Icon
                name="md-home-outline"
                color="black"
                style={{padding: 5}}
                solid
                size={moderateScale(30, 0.1)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'UserStack'}
        component={UserStack}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarVisible: false,

          tabBarIcon: ({focused}) => (
            <View>
              <AntDesign
                name="adduser"
                color={focused ? '#FFD700' : 'black'}
                solid
                size={moderateScale(30, 0.1)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'NotificationStack'}
        component={NotificationStack}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarVisible: false,

          tabBarIcon: ({focused}) => (
            <View>
              <Icon
                name="notifications-outline"
                color={focused ? '#FFD700' : 'black'}
                solid
                size={moderateScale(30, 0.1)}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name={'Setting'}
        component={SettingStack}
        options={{
          tabBarIcon: ({focused}) => (
            <View>
              <AntDesign
                name="setting"
                color={focused ? '#FFD700' : 'black'}
                solid
                size={moderateScale(30, 0.1)}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({
  addTab: {
    backgroundColor: '#FFD700',
    // padding: moderateScale(10, 0.1),
    width: moderateScale(50, 0.1),
    height: moderateScale(50, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(50, 0.1),
    borderRadius: moderateScale(25, 0.1),
  },
});
