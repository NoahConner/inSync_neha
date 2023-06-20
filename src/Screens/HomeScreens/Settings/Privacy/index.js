import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../../Components/Header';
import {black} from '../../../../Constants';

const Privacy = ({navigation}) => {
  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../../assets/images/privacy.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header navigation={navigation} />
      <ScrollView style={{marginBottom: moderateScale(50, 0.1)}}>
        <View style={s.center}>
          <Text style={s.txt1}>Privacy Policy</Text>
          <View
            style={{
              marginVertical: moderateScale(20, 0.1),
              paddingHorizontal: moderateScale(20, 0.1),
            }}>
            <Text
              style={{
                fontSize: moderateScale(15, 0.1),
                fontWeight: '300',
                lineHeight: moderateScale(18, 0.1),
                fontFamily: 'Rubik-Black',
                color: '#7E7E7E',
              }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>

          <View style={{height: moderateScale(50, 0.1)}}></View>
        </View>
      </ScrollView>

      <View style={s.vector}>
        <Image
          style={{transform: [{rotate: '180deg'}]}}
          resizeMode="contain"
          source={require('../../../../assets/images/PNG/Vector.png')}
        />
      </View>
    </ImageBackground>
  );
};
export default Privacy;
