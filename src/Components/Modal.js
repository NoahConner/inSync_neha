import React, {useState} from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  ImageBackground,
  Keyboard,
  TouchableWithoutFeedback,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {backgroundColor, black} from '../Constants';
import {moderateScale} from 'react-native-size-matters';
import Input from './input';
import Button from '../Components/Button';
import Modal from 'react-native-modal';
import Inicon from 'react-native-vector-icons/Entypo';
import Reminder from '../Screens/HomeScreens/Notification/Reminder';

const ModalView = ({
  visible,
  close,
  cancel,
  close1,
  text,
  type,
  text2,
  title1,
  title2,
}) => {
  return (
    <View>
      <Modal isVisible={visible}>
        <View
          style={
            type === 'period'
              ? {
                  borderRadius: 20,
                  alignSelf: 'center',
                  width: moderateScale(300, 0.1),
                  height: moderateScale(280, 0.1),
                }
              : styles.modalView
          }>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ImageBackground
              style={styles.backImg}
              source={require('../assets/images/chances.png')}
              resizeMode="contain">
              <View style={styles.center}>
                <TouchableOpacity
                  onPress={cancel}
                  style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <Inicon name="cross" size={moderateScale(28)} color="black" />
                </TouchableOpacity>
                <View>
                  <Text style={styles.txt1}> {text} </Text>
                  <Text style={styles.txt1}>{text2} </Text>
                </View>

                {type === 'sync' ? (
                  <View
                    style={[
                      styles.input,
                      {
                        marginVertical: moderateScale(20, 0.1),
                      },
                    ]}>
                    <Input
                      style={{backgroundColor: '#D9D9D9'}}
                      placeholder={'Relation'}
                      type={'relation'}
                      // setValue={v => setEmail(v)}
                      // value={email}
                    />
                    <Input
                      style={{backgroundColor: '#D9D9D9'}}
                      placeholder={'Email'}
                      type={'email'}
                      // setValue={v => setPassword(v)}
                      // value={password}
                    />

                    <View style={styles.btn}>
                      <Button text={'Submit'} onPress={close} />
                    </View>
                  </View>
                ) : type === 'period' ? (
                  <View style={[styles.input]}>
                    <Text
                      style={{
                        fontSize: moderateScale(28, 0.1),
                        lineHeight: moderateScale(33, 0.1),
                        fontWeight: '700',
                        fontFamily: 'Rubik-Black',
                        color: black,
                        textAlign: 'center',
                        paddingHorizontal: moderateScale(30, 0.1),
                      }}>
                      {' '}
                      {title1}{' '}
                    </Text>
                    <Text
                      style={{
                        fontSize: moderateScale(25, 0.1),
                        lineHeight: moderateScale(30, 0.1),
                        fontWeight: '700',
                        fontFamily: 'Rubik-Black',
                        color: '#6C6C6C',
                        paddingVertical: moderateScale(10, 0.1),
                        textAlign: 'center',
                        paddingHorizontal: moderateScale(30, 0.1),
                      }}>
                      {' '}
                      {title2}{' '}
                    </Text>
                    {/* <View style={styles.btn}>
                      <Button text={'OK'} onPress={close} />
                    </View> */}
                  </View>
                ) : (
                  <View style={styles.input}>
                    <Input
                      style={{backgroundColor: '#D9D9D9'}}
                      placeholder={'Conception Date'}
                      type={'conception date'}
                      // setValue={v => setEmail(v)}
                      // value={email}
                    />
                    <Input
                      style={{backgroundColor: '#D9D9D9'}}
                      placeholder={'Expected Date'}
                      type={'expected date'}
                      // setValue={v => setPassword(v)}
                      // value={password}
                    />

                    <View style={styles.btn}>
                      <Button text={'Submit'} onPress={close} />
                    </View>
                  </View>
                )}
              </View>
            </ImageBackground>
          </TouchableWithoutFeedback>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  modalView: {
    borderRadius: 20,
    alignSelf: 'center',
    width: moderateScale(330, 0.1),
    height: moderateScale(330, 0.1),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.1),
    // backgroundColor: 'red',
  },
  txt2: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    fontWeight: '800',
    alignSelf: 'center',
  },

  backImg: {
    width: '100%',
    height: '100%',
    backgroundColor: backgroundColor,
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
  txt1: {
    fontSize: moderateScale(25, 0.1),
    lineHeight: moderateScale(30, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
  },
  center: {
    paddingHorizontal: moderateScale(20, 0.1),
    top: moderateScale(25, 0.1),
  },

  input: {
    // marginVertical: moderateScale(10, 0.1),
  },
});

export default ModalView;
