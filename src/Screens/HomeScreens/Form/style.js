import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  screenHeight,
  screenWidth,
  black,
} from '../../../Constants';

const Poppins = '';
const PoppinsBold = '';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  backImg: {
    flex: 1,
    backgroundColor: backgroundColor,
    height: '100%',
    width: '100%',
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(70, 0.1),
    height: '84%',
  },
  txt1: {
    fontSize: moderateScale(25, 0.1),
    lineHeight: moderateScale(30, 0.1),
    color: black,
    fontWeight: moderateScale(400, 0.1),
    alignSelf: 'center',
  },
  txt2: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    fontWeight: moderateScale(300, 0.1),
    alignSelf: 'center',
  },
  txt3: {
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(17, 0.1),
    color: black,
    fontWeight: moderateScale(300, 0.1),
    alignSelf: 'center',
  },

  input: {
    marginVertical: moderateScale(10, 0.1),
  },
  fTxt: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(10, 0.1),
  },
  Ftxt: {
    color: 'black',
    fontSize: moderateScale(13, 0.1),
  },
  SLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  vector1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(5, 0.1),
    bottom: moderateScale(2, 0.1),
  },
  link: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
});

export default styles;
