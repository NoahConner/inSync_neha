import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, black} from '../../../../Constants';
import {screenWidth, screenHeight} from '../../../../Constants';

const styles = StyleSheet.create({
  backImg: {
    position: 'absolute',
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  vector: {
    // flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
    position: 'absolute',
  },
  txt1: {
    fontSize: moderateScale(20, 0.1),
    lineHeight: moderateScale(24, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
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
    marginVertical: moderateScale(10, 0.1),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(50, 0.1),
    // backgroundColor: 'red',
  },
  center: {
    paddingHorizontal: moderateScale(20, 0.1),
    top: moderateScale(45, 0.1),
    height: screenHeight - moderateScale(150, 0.1),
  },
});

export default styles;
