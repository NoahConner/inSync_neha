import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, black} from '../../../../Constants';
import Header from '../../../../Components/Header';
import SVGImg from '../../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../../assets/images/svg/icon5.svg';
import SVGImg3 from '../../../../assets/images/svg/leaf2.svg';

const Terms = ({navigation}) => {
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
              source={require('../../../../assets/images/PNG/upborder.png')}
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
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.center}>
          <Text style={s.txt1}>Terms & Conditions</Text>
          <View
            style={{
              marginTop: moderateScale(40),
            }}>
            <Text
              style={{
                fontSize: moderateScale(15, 0.1),
                fontWeight: '300',
                lineHeight: moderateScale(18, 0.1),
                fontFamily: 'Rubik-Regular',
                color: '#7E7E7E',
                textAlign: 'center',
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
              Lorem Ipsum. {'\n'}
              {'\n'}
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and
            </Text>
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
                source={require('../../../../assets/images/term-btm.jpg')}
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
            source={require('../../../../assets/images/PNG/downborder.png')}
          />
      </View>
    </View>
  );
};
export default Terms;
