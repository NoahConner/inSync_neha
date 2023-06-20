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
import {black} from '../../../../Constants';
import Header from '../../../../Components/Header';

const Help = ({navigation}) => {
  const [day, setDay] = useState(null);
  const [selectHour, setSelectHour] = useState(null);
  const [reminder, setReminder] = useState(null);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ImageBackground
        style={s.backImg}
        source={require('../../../../assets/images/help.jpg')}
        resizeMode="contain">
        <KeyboardAvoidingView>
          <View>
            <Image
              resizeMode="contain"
              source={require('../../../../assets/images/PNG/Vector.png')}
            />
          </View>
          <Header navigation={navigation} />
          <ScrollView>
            <View style={s.center}>
              <Text style={s.txt1}>Help</Text>

              <View style={s.input}>
                <Text style={s.txt2}>How can we help you?</Text>
                <View
                  style={{
                    width: moderateScale(324, 0.1),
                    height: moderateScale(156, 0.1),
                    backgroundColor: '#EEEEEE',
                    alignSelf: 'center',
                    marginVertical: moderateScale(5, 0.1),
                  }}>
                  <TextInput
                    style={{paddingHorizontal: moderateScale(10, 0.1)}}
                    placeholder="Type here....."
                    placeholderTextColor={'#909090'}
                  />
                </View>

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
                    <Text style={[s.linkTxt, {color: black}]}>
                      abc@example.com
                    </Text>
                  </Text>
                  <Text style={s.linkTxt}>Or contact us at 123-456789-0</Text>
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
        </KeyboardAvoidingView>
      </ImageBackground>
    </TouchableWithoutFeedback>
  );
};

export default Help;
