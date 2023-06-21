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

const Reminder = ({navigation}) => {
  const [day, setDay] = useState(null);
  const [selectHour, setSelectHour] = useState(null);
  const [reminder, setReminder] = useState(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={s.backImg}
        source={require('../../../../assets/images/reminder.jpg')}
        resizeMode="contain">
        <View>
          <Image
            resizeMode="contain"
            source={require('../../../../assets/images/PNG/Vector.png')}
          />
        </View>
        <Header navigation={navigation} />
        <ScrollView
          contentContainerStyle={{
            marginBottom: moderateScale(50, 0.1),
            paddingBottom: moderateScale(20, 0.1),
          }}>
          <View style={s.center}>
            <Text style={s.txt1}>Notifications & Reminders</Text>
            <View style={{marginVertical: moderateScale(15, 0.1)}}>
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
                setValue={v => setSelectHour(v)}
                value={selectHour}
              />

              <Input
                placeholder={'Reminder'}
                // placeholderTextColor={'#929292'}
                style={{
                  paddingVertical: moderateScale(2, 0.1),
                  color: 'black',
                  width: moderateScale(270, 0.1),
                  height: moderateScale(58, 0.1),
                }}
                type={'reminder'}
                setValue={v => setReminder(v)}
                value={reminder}
              />

              <View style={s.btn}>
                <Button text={'Add Now'} />
              </View>
            </View>

            <View style={{height: moderateScale(30, 0.1)}}></View>
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
    </TouchableWithoutFeedback>
  );
};

export default Reminder;
