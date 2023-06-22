import {
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, { useState, useContext } from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import { AppContext, useAppContext } from '../../../Context/AppContext';
import ModalView from '../../../Components/Modal';
import {
  backgroundColor,
  black,
  screenHeight,
  screenWidth,
} from '../../../Constants';
import { moderateScale } from 'react-native-size-matters';
import styles from './style';
import SVGImg from '../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../assets/images/svg/small-lf.svg';
import SVGImg3 from '../../../assets/images/svg/lob.svg';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Form = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);
  const { setToken } = useAppContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        position: 'relative',
        paddingHorizontal: moderateScale(30, 0.1),
      }}>
      {/* corner blob */}
      <View style={{ position: 'absolute', top: 0, left: 0 }}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>

      {/* butterfly */}
      <View
        style={{
          position: 'absolute',
          right: moderateScale(15, 0.1),
          top: moderateScale(30, 0.1),
        }}>
        <SVGImg width={80} height={80} />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(50, 0.1),
          right: moderateScale(140, 0.1),
        }}>
        <SVGImg2 />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(110, 0.1),
          right: 25,
        }}>
        <SVGImg3 />
      </View>

      <View
        style={{
          paddingTop: moderateScale(60, 0.1),
        }}>
        <View style={{ height: moderateScale(40, 0.1) }}></View>
        {/* <Header navigation={navigation} /> */}
      </View>
      <ScrollView style={{ marginBottom: moderateScale(0, 0.1) }}
        showsVerticalScrollIndicator={false}
      >
        <View style={s.center}>
          <Text style={s.txt1}>Detailed Form</Text>
          <View style={s.input}>
            <Input
              placeholder={'First Name'}
              type={'text'}
              value={name}
              setValue={v => setName(v)}
            />
            <Input
              placeholder={'Last Name'}
              type={'text'}
              value={last}
              setValue={v => setLast(v)}
            />
            <Input placeholder={'DOB'} type={'DOB'} />
            <Input
              placeholder={'Cycle Duration'}
              type={'number'}
              maxLength={2}
            />
            <Input placeholder={'Expected Date'} type={'expected date'} />

            <Input
              placeholder={'Period Duration'}
              type={'number'}
              maxLength={2}
            />

            <Input
              placeholder={'Relation'}
              type={'relation'}
              style={{
                justifyContent: 'flex-start',
                paddingHorizontal: moderateScale(18, 0.1),
                backgroundColor: '#D9D9D9',
              }}
            />

            <View style={s.btn}>
              <Button
                text={'Submit'}
                onPress={() => {
                  setToken('sdsk');
                  // navigation.navigate('home');
                }}
              />
            </View>
            <View>
              <Text
                style={[
                  styles.txt1,
                  {
                    fontSize: moderateScale(15, 0.1),
                  },
                ]}>
                ---------OR--------
              </Text>
            </View>
            <View style={s.btn}>
              <Button
                text={'Sync with Partner'}
                onPress={() => {
                  setModalVisible(true);
                }}
              />
            </View>
          </View>
        </View>
        <View
            style={{
              height: moderateScale(200, 0.1),
              justifyContent: 'center',
              alignItems: 'center',
              marginTop:50,
              overflow:'hidden'
            }}>
            <Image
              resizeMode="contain"
              style={{ width: moderateScale(280, 0.1) }}
              source={require('../../../assets/images/form-btm.jpg')}
            />
          </View>
      </ScrollView>

      <View style={s.vector}>
        <Image
          style={{ transform: [{ rotate: '180deg' }] }}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>

      <ModalView
        visible={modalVisible}
        type={'sync'}
        text={`Get Sync With`}
        text2={'Your Partner'}
        close={() => setModalVisible(!modalVisible)}
        cancel={() => setModalVisible(!modalVisible)}
      />
    </View>
  );
};
export default Form;
