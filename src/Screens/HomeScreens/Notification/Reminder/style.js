import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, black} from '../../../../Constants';
import {screenWidth, screenHeight} from '../../../../Constants';
const robik = 'Rubik-Black';

const styles = StyleSheet.create({
  backImg: {
    position: 'absolute',
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  vector: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  txt1: {
    fontSize: moderateScale(20, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
    fontFamily: robik,
  },
  txt2: {
    // paddingVertical: moderateScale(30, 0.1),
    fontSize: moderateScale(17, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    fontWeight: '800',
    textAlign: 'center',
  },
  input: {
    // marginVertical: moderateScale(10, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(30, 0.1),
    // backgroundColor: 'red',
  },
  center: {
    paddingHorizontal: moderateScale(20, 0.1),
  },
});

export default styles;
