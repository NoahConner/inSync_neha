import {StyleSheet, Platform, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import {backgroundColor, black} from '../Constants';
import ModalView from '../Components/Modal';
const Tab = createBottomTabNavigator();

const BottomTabs = () => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarHideOnKeyboard: Platform.OS !== 'ios',
          tabBarStyle: [
            {
              display: 'flex',
              backgroundColor: backgroundColor,
              borderTopWidth: 1,
              borderTopColor: '#595959',
              // elevation: 10,
              shadowColor: 'rgba(0, 0, 0, 5)',
              shadowOffset: {width: 10, height: 10},
              shadowOpacity: 1,
              shadowRadius: 22,
              width: '100%',
              height:
                Platform.OS == 'ios'
                  ? moderateScale(90, 0.1)
                  : moderateScale(60, 0.1),
              elevation: 1,
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
              <View style={focused ? styles.focus : null}>
                <Icon
                  name="md-home-outline"
                  color="black"
                  style={{padding: 7}}
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
            tabBarVisible: false,

            tabBarIcon: ({focused}) => (
              <View style={focused ? styles.focus : null}>
                <AntDesign
                  name="adduser"
                  color="black"
                  style={{padding: 7}}
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
            tabBarIcon: ({focused}) => (
              <View style={focused ? styles.focus : null}>
                <Icon
                  name="notifications-outline"
                  color="black"
                  style={{padding: 7}}
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
              <View style={focused ? styles.focus : null}>
                <AntDesign
                  name="setting"
                  color="black"
                  solid
                  style={{padding: 7}}
                  size={moderateScale(30, 0.1)}
                />
              </View>
            ),
          }}
        />
      </Tab.Navigator>
    </>
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
  focus: {
    backgroundColor: '#FFFFFF',
    elevation: 3,
    shadowColor: 'rgba(0, 0, 0, 5)',
    shadowOffset: {width: 10, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 22,
    borderRadius: 22,
  },
});
