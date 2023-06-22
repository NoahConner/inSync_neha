import {
  Text,
  View,
  ScrollView,
  ImageBackground,
  Image,
  Keyboard,
  TouchableWithoutFeedback,
  TouchableOpacity,
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

const Reminder = ({navigation}) => {
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
        <View style={{position: 'absolute', top: 0, left: 0}}>
          <Image
            resizeMode="contain"
            source={require('../../../../assets/images/PNG/Vector.png')}
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
            <Text style={s.txt1}>Notifications & Reminders</Text>
            <View
              style={{
                marginVertical: moderateScale(15, 0.1),
                marginTop: moderateScale(30, 0.1),
              }}>
              <Text style={s.txt2}>Add Reminder</Text>
            </View>
            <View style={s.input}>
              <Input
                placeholder={'Day'}
                type={'number'}
                maxLength={2}
                setValue={v => setDay(v)}
                value={day}
              />
              <Input
                placeholder={'Every Hour'}
                type={'hourOptions'}
                // setValue={v => setSelectHour(v)}
                // value={selectHour}
              />

              <Input
                placeholder={'Reminder'}
                // placeholderTextColor={'#929292'}
                style={{
                  paddingVertical: moderateScale(2, 0.1),
                  color: 'black',
                  width: moderateScale(270, 0.1),
                  height: moderateScale(70, 0.1),
                }}
                type={'reminder'}
                setValue={v => setReminder(v)}
                value={reminder}
              />

              <View style={s.btn}>
                <Button text={'Add Now'} />
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
                  style={{
                    top: moderateScale(-30, 0.1),
                    width: moderateScale(420, 0.1),
                    height: moderateScale(305, 0.1),
                  }}
                  source={require('../../../../assets/images/reminder-btm.jpg')}
                />
              </View>
            </View>
          </View>
        </ScrollView>

        <View style={s.vector}>
          <Image
            style={{transform: [{rotate: '180deg'}]}}
            resizeMode="contain"
            source={require('../../../../assets/images/PNG/Vector.png')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Reminder;
