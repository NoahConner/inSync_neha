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
    // position: 'relative',
  },
  backImg: {
    flex: 1,
    backgroundColor: backgroundColor,
    overflow: 'hidden',
    // position: 'absolute',
    // height: '100%',
    // width: '100%',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,

    // alignSelf:'stretch'
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(82, 0.1),
    // backgroundColor: 'red',
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
    // backgroundColor: 'red',
  },
  Ftxt: {
    color: 'black',
    fontSize: moderateScale(12, 0.1),
  },
  SLogin: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'center',
  },
  vector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(8, 0.1),
    bottom: moderateScale(2, 0.1),
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  vector: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: moderateScale(7, 0.1),
  },
});

export default styles;
