import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  screenHeight,
  screenWidth,
  black,
} from '../../../Constants';

const robik = 'Rubik-Black';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backImg: {
    position: 'absolute',
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(32, 0.1),
    // backgroundColor: 'red',
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    // fontWeight: '700',
    alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
  },
  input: {
    marginVertical: moderateScale(20, 0.1),
  },
  fTxt: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(30, 0.1),
    // backgroundColor: 'red',
  },
  vector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(7, 0.1),
  },
});

export default styles;
