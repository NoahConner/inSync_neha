import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import Input from '../../../../Components/input';
import Button from '../../../../Components/Button';

import Header from '../../../../Components/Header';
import {backgroundColor, black} from '../../../../Constants';
import SVGImg from '../../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../../assets/images/svg/icon5.svg';
import SVGImg3 from '../../../../assets/images/svg/leaf2.svg';

const Help = ({navigation}) => {
  const [day, setDay] = useState(null);
  const [selectHour, setSelectHour] = useState(null);
  const [reminder, setReminder] = useState(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        style={{
          backgroundColor: backgroundColor,
          flex: 1,
          position: 'relative',
          paddingHorizontal: moderateScale(30, 0.1),
        }}>
        {/* corner blob */}
        <View style={{position: 'absolute', top: -38, left: 0, opacity: 0.7}}>
          <Image
            style={{width: 99}}
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
          style={{
            position: 'absolute',
            top: moderateScale(90, 0.1),
            left: -30,
          }}>
          <SVGImg2 />
        </View>

        {/* left leaf */}
        <View
          style={{
            position: 'absolute',
            top: moderateScale(180, 0.1),
            right: 0,
          }}>
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
            <Text style={s.txt1}>Help</Text>
            <View style={s.input}>
              <Text style={s.txt2}>How can we help you?</Text>
              <Input
                placeholder={'Type Here..'}
                placeholderTextColor={''}
                style={{
                  paddingVertical: moderateScale(10, 0.1),
                  backgroundColor: '#EEEEEE',
                  color: 'black',
                  width: moderateScale(270, 0.1),
                  height: moderateScale(156, 0.1),

                  borderWidth: 0,
                }}
                type={'reminder'}
                setValue={v => setReminder(v)}
                value={reminder}
              />

              <View style={s.btn}>
                <Button text={'Send'} />
              </View>
              <View
                style={{
                  height: moderateScale(35, 0.1),
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: moderateScale(-10, 0.1),
                }}>
                <Text style={s.linkTxt}>
                  For more information email us at :
                  <Text
                    style={[
                      s.linkTxt,
                      {fontFamily: 'Rubik-Bold', color: 'black'},
                    ]}>
                    abc@example.com
                  </Text>
                </Text>
                <Text style={s.linkTxt}>
                  Or contact us
                  <Text
                    style={[
                      s.linkTxt,
                      {fontFamily: 'Rubik-Bold', color: 'black'},
       
       ]}>
                    at 123-456789-0
                  </Text>
                </Text>
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
                  source={require('../../../../assets/images/term-btm.jpg')}
                />
              </View>
            </View>

            {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
          </View>
        </ScrollView>

        <View style={s.vector}>
          <Image
            style={{width: 99, top: 45, opacity: 0.7}}
            resizeMode="contain"
            source={require('../../../../assets/images/PNG/downborder.png')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Help;
