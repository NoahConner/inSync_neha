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
import SVGImg from '../assets/images/svg/round.svg';
import SVGImg2 from '../assets/images/svg/small-lf.svg';
import SVGImg3 from '../assets/images/svg/lob.svg';
import SVGImg1 from '../assets/images/svg/wIcon';

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
  const robik = 'Rubik-Black';
  return (
    <View>
      <Modal isVisible={visible}>
        <View
          style={
            type === 'period'
              ? {
                  borderRadius: 20,
                  alignSelf: 'center',
                  width: moderateScale(324, 0.1),
                  height: moderateScale(202, 0.1),
                }
              : styles.modalView
          }>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            {type === 'period' ? (
              <ImageBackground
                style={styles.backImg}
                source={require('../assets/images/rem.jpg')}
                resizeMode="contain">
                <View
                  style={{
                    alignItems: 'center',
                    flexDirection: 'row',
                    height: moderateScale(30, 0.1),
                    marginVertical: moderateScale(10, 0.1),
                  }}>
                  <View style={{flex: 0.9}}>
                    <Text
                      style={[
                        styles.txt1,
                        {
                          paddingLeft: moderateScale(25, 0.1),
                          fontSize: moderateScale(15, 0.1),
                          lineHeight: moderateScale(17, 0.1),
                          top: moderateScale(15, 0.1),
                        },
                      ]}>
                      {' '}
                      {text}{' '}
                    </Text>
                  </View>
                  <TouchableOpacity
                    onPress={cancel}
                    style={{
                      flex: 0.1,
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      // paddingTop: moderateScale(10, 0.1),
                      paddingRight: moderateScale(10, 0.1),
                    }}>
                    <Inicon
                      name="cross"
                      size={moderateScale(30)}
                      color="black"
                    />
                  </TouchableOpacity>
                </View>
                <View
                  style={{
                    justifyContent: 'center',
                    width: '80%',
                    alignItems: 'center',
                    alignSelf: 'center',
                    marginVertical: moderateScale(15, 0.1),
                    // paddingHorizontal: moderateScale(10, 0.1),
                  }}>
                  <Text
                    style={{
                      fontSize: moderateScale(24, 0.1),
                      lineHeight: moderateScale(26, 0.1),
                      // fontWeight: '700',
                      fontFamily: 'Rubik-Bold',
                      color: black,
                      paddingHorizontal: moderateScale(30, 0.1),
                    }}>
                    {' '}
                    {title1}{' '}
                  </Text>
                  <Text
                    style={{
                      fontSize: moderateScale(25, 0.1),
                      lineHeight: moderateScale(30, 0.1),
                      // fontWeight: '700',
                      fontFamily: 'Rubik-Bold',
                      color: '#6C6C6C',
                      paddingVertical: moderateScale(10, 0.1),

                      paddingHorizontal: moderateScale(30, 0.1),
                    }}>
                    {' '}
                    {title2}{' '}
                  </Text>
                </View>
              </ImageBackground>
            ) : type === 'sync' ? (
              <View
                style={{
                  width: moderateScale(324, 0.1),
                  height: moderateScale(360, 0.1),
                  backgroundColor: backgroundColor,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    top: moderateScale(50, 0.1),
                    right: moderateScale(10, 0.1),
                  }}>
                  <SVGImg2 width={60} height={60} />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: moderateScale(20, 0.1),
                    left: moderateScale(100, 0.1),
                  }}>
                  <SVGImg2 width={60} height={60} />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    left: moderateScale(12, 0.1),
                    bottom: moderateScale(40, 0.1),
                  }}>
                  <SVGImg width={70} height={70} />
                </View>

                {/* left leaf */}

                {/* left leaf */}
                <View
                  style={{
                    position: 'absolute',
                    top: moderateScale(30, 0.1),
                    left: moderateScale(25, 0.1),
                  }}>
                  <SVGImg3 width={50} height={50} />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: moderateScale(10, 0.1),
                    right: moderateScale(15, 0.1),
                  }}>
                  <SVGImg1 />
                </View>

                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={cancel}
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      top: moderateScale(-10, 0.1),
                      right: moderateScale(-10, 0.1),
                    }}>
                    <Inicon
                      name="cross"
                      size={moderateScale(32)}
                      color="black"
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.txt1}> {text} </Text>
                    <Text style={styles.txt1}>{text2} </Text>
                  </View>

                  <View
                    style={[
                      styles.input,
                      {
                        marginVertical: moderateScale(20, 0.1),
                      },
                    ]}>
                    <Input
                      style={{
                        backgroundColor: '#D9D9D9',
                        width: moderateScale(210, 0.1),
                        height: moderateScale(37, 0.1),
                      }}
                      placeholder={'Relation'}
                      placeholderTextColor={'red'}
                      type={'relation'}
                      // setValue={v => setEmail(v)}
                      // value={email}
                    />
                    <Input
                      style={{
                        backgroundColor: '#D9D9D9',
                        width: moderateScale(210, 0.1),
                        height: moderateScale(37, 0.1),
                      }}
                      placeholder={'Email'}
                      type={'email'}
                      // setValue={v => setPassword(v)}
                      // value={password}
                    />

                    <View style={styles.btn}>
                      <Button text={'Submit'} onPress={close} />
                    </View>
                  </View>
                </View>
              </View>
            ) : (
              <View
                style={{
                  width: moderateScale(324, 0.1),
                  height: moderateScale(360, 0.1),
                  backgroundColor: backgroundColor,
                }}>
                <View
                  style={{
                    position: 'absolute',
                    top: moderateScale(30, 0.1),
                    left: moderateScale(10, 0.1),
                  }}>
                  <SVGImg2 width={70} height={70} />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    top: moderateScale(140, 0.1),
                    right: moderateScale(10, 0.1),
                  }}>
                  <SVGImg2 width={50} height={50} />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    left: moderateScale(15, 0.1),
                    bottom: moderateScale(20, 0.1),
                  }}>
                  <SVGImg width={90} height={90} />
                </View>

                {/* left leaf */}

                {/* left leaf */}
                <View
                  style={{
                    position: 'absolute',
                    top: moderateScale(50, 0.1),
                    right: 25,
                  }}>
                  <SVGImg3 />
                </View>
                <View
                  style={{
                    position: 'absolute',
                    bottom: moderateScale(10, 0.1),
                    right: 15,
                  }}>
                  <SVGImg1 />
                </View>

                <View style={styles.center}>
                  <TouchableOpacity
                    onPress={cancel}
                    style={{
                      justifyContent: 'flex-end',
                      alignItems: 'flex-end',
                      top: moderateScale(-10, 0.1),
                      right: moderateScale(-10, 0.1),
                    }}>
                    <Inicon
                      name="cross"
                      size={moderateScale(32)}
                      color="black"
                    />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.txt1}> {text} </Text>
                    <Text style={styles.txt1}>{text2} </Text>
                  </View>

                  <View style={styles.input}>
                    <Input
                      style={{
                        backgroundColor: '#D9D9D9',
                        width: moderateScale(215, 0.1),
                        height: moderateScale(37, 0.1),
                      }}
                      placeholder={'Conception Date'}
                      type={'conception date'}
                      // setValue={v => setEmail(v)}
                      // value={email}
                    />
                    <Input
                      style={{
                        backgroundColor: '#D9D9D9',
                        width: moderateScale(215, 0.1),
                        height: moderateScale(37, 0.1),
                      }}
                      placeholder={'Expected Date'}
                      type={'expected date'}
                      // setValue={v => setPassword(v)}
                      // value={password}
                    />

                    <View style={styles.btn}>
                      <Button text={'Submit'} onPress={close} />
                    </View>
                  </View>
                </View>
              </View>

              // </ImageBackground>
            )}
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
    paddingVertical: moderateScale(15, 0.1),
    // backgroundColor: 'red',
  },
  txt2: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    // fontWeight: '800',
    alignSelf: 'center',
  },

  backImg: {
    width: '100%',
    height: '100%',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: backgroundColor,
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
  txt1: {
    fontSize: moderateScale(18, 0.1),
    lineHeight: moderateScale(22, 0.1),
    color: black,
    // fontWeight: '700',
    alignSelf: 'center',
    fontFamily: 'Rubik-Bold',
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
