import { Dimensions, StyleSheet } from 'react-native';
import { moderateScale } from 'react-native-size-matters';
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
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
    flex: 1
  },
  center: {
    alignSelf: 'center',
    marginTop: moderateScale(45, 0.1),
    paddingHorizontal: moderateScale(20,0.1)
    // backgroundColor: 'red',
    // height: '81%',
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
    fontFamily: robik,
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
    paddingVertical: moderateScale(20, 0.1),
    // backgroundColor: 'red',
  },
  vector: {
    right: 0, position: 'absolute',
    bottom: 0,
  },
});

export default styles;
