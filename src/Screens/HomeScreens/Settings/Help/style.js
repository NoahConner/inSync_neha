import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  black,
  screenHeight,
  screenWidth,
} from '../../../../Constants';

const styles = StyleSheet.create({
  backImg: {
    // flex: 1,
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
    // position: 'absolute',
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
  },
  txt2: {
    // paddingVertical: moderateScale(30, 0.1),
    fontSize: moderateScale(17, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    fontWeight: '700',
    padding: moderateScale(12, 0.1),
    // textAlign: 'center',
  },
  input: {
    marginVertical: moderateScale(10, 0.1),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(20, 0.1),
    // backgroundColor: 'red',
  },
  linkTxt: {
    fontSize: moderateScale(8, 0.1),
    lineHeight: moderateScale(10, 0.1),
    textAlign: 'center',
    fontWeight: '300',
    color: '#919191',
  },
  center: {
    paddingHorizontal: moderateScale(20, 0.1),
    top: moderateScale(45, 0.1),
    width: screenWidth,
    height: screenHeight - 100,
  },
});

export default styles;
