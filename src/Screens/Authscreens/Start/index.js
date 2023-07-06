import React from 'react';
import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import CutomButton from '../../../Components/Button';
import {backgroundColor, screenHeight, screenWidth} from '../../../Constants';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import img from '../../../assets/images/start.jpg';

const StartScreen = ({navigation}) => {
  return (
    <ImageBackground style={s.backImg} source={img} resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <View style={s.arrow}>
        <Image
          style={s.arrImg}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/i14.png')}
        />
      </View>
      <View
        style={{
          flex: 1,
          // alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View>
          <Image
            style={s.logo}
            // resizeMode="contain"
            source={require('../../../assets/images/PNG/logo-icon.png')}
          />
        </View>
        {/* <View style={{marginVertical: moderateScale(12, 0.1)}}>
          <Image
            style={s.text}
            // resizeMode="contain"
            source={require('../../../assets/images/PNG/logo.png')}
          />
        </View> */}
        <View style={s.btn}>
          <View style={{paddingVertical: 15}}>
            <CutomButton
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View>
            <CutomButton
              text="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            alignItems: 'flex-start',
            transform: [{rotate: '180deg'}],
          }}>
          <Image
            style={{height: 140, width: 70}}
            source={require('../../../assets/images/PNG/i14.png')}
          />
        </View>
      </View>
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
export default StartScreen;
