import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import CutomButton from '../../../Components/Button';
import {backgroundColor, screenHeight, screenWidth} from '../../../Constants';
import s from './style';
import customImage from '../../../Components/icon';

const StartScreen = () => {
  return (
    <View style={s.container}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: 'center',
          position: 'relative',
          alignItems: 'center',
        }}
        resizeMode="cover"
        source={require('../../../assets/images/backImg.jpg')}>
        <View style={s.btn}>
          <View style={{paddingVertical: 15}}>
            <CutomButton text="Login" />
          </View>
          <View>
            <CutomButton text="Sign Up" />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default StartScreen;
