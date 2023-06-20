import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import Button from '../../../Components/Button';
import Account from '../../../Components/account';
import Header from '../../../Components/Header';
import {black} from '../../../Constants';
import {AppContext, useAppContext} from '../../../Context/AppContext';
const Setting = ({navigation}) => {
  const {setToken} = useAppContext(AppContext);
  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/setting.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header navigation={navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={{
            flex: 1,
          }}>
          <View style={s.center}>
            <Text style={s.txt1}>Settings</Text>
            <Account
              type="account"
              text="Account"
              text1="Edit Profile"
              onPress1={() => navigation.navigate('profile')}
              onPress2={() => navigation.navigate('reset')}
              text2="Change Password"
            />
            <Account
              type="notification"
              text="Notification"
              text1="Notifications"
              text2="App Notifications"
            />
            <Account
              type="More"
              text="More"
              text1="Privacy Policy"
              text2="Terms & Conditions"
              onPress1={() => navigation.navigate('privacy')}
              onPress2={() => navigation.navigate('terms')}
              onPress3={() => navigation.navigate('help')}
              text3="Help"
            />
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Button text={'Logout'} onPress={() => setToken(null)} />
            </View>

            {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>

      <View style={s.vector}>
        <Image
          style={{transform: [{rotate: '180deg'}]}}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
    </ImageBackground>
  );
};
export default Setting;
