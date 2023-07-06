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
import {AppContext, useAppContext} from '../../../Context/AppContext';
import {backgroundColor} from '../../../Constants';
import SVGImg from '../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../assets/images/svg/icon5.svg';
import SVGImg3 from '../../../assets/images/svg/leaf2.svg';
const Setting = ({navigation}) => {
  const {setToken} = useAppContext(AppContext);
  return (
  
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        position: 'relative',
        paddingHorizontal: moderateScale(30, 0.1),
      }}>
      {/* corner blob */}
      <View style={{position: 'absolute', top: -38, left: 0 , opacity:0.7}}>
        <Image
        style={{width:99}}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/upborder.png')}
        />
      </View>

      {/* butterfly */}
      <View
        style={{
          position: 'absolute',
          right: moderateScale(20, 0.1),
          top: moderateScale(40, 0.1),
        }}>
        <SVGImg width={80} height={80} />
      </View>

      {/* left leaf */}
      <View
        style={{position: 'absolute', top: moderateScale(90, 0.1), left: -30}}>
        <SVGImg2 />
      </View>

      {/* left leaf */}
      <View
        style={{position: 'absolute', top: moderateScale(180, 0.1), right: 0}}>
        <SVGImg3 />
      </View>

      <View
        style={{
          paddingTop: moderateScale(60, 0.1),
        }}>
        <Header navigation={navigation} />
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      
      >
        <View style={s.center}>
          <Text style={s.txt1}>Settings</Text>
          <View style={{marginTop: moderateScale(30, 0.1)}}>
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
          </View>

          <View style={{}}>
            <View
              style={{
                marginTop: moderateScale(30, 0.1),
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                resizeMode="contain"
                style={{width: moderateScale(280, 0.1)}}
                source={require('../../../assets/images/setting-btm.jpg')}
              />
            </View>
          </View>

          {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
        </View>
      </ScrollView>

      <View style={s.vector}>
        <Image
          style={{width:99 , top:45 , opacity:0.7}}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/downborder.png')}
        />
      </View>
    </View>
  );
};
export default Setting;
