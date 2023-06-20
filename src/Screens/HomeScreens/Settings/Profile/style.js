import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, black} from '../../../../Constants';
import {screenWidth, screenHeight} from '../../../../Constants';

const Poppins = '';
const PoppinsBold = '';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  backImg: {
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(30, 0.1),
    height: '81%',
    marginBottom: moderateScale(40, 0.1),
  },
  imgView: {
    marginVertical: moderateScale(12, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: moderateScale(76, 0.1),
    height: moderateScale(76, 0.1),
  },
  name: {
    fontSize: moderateScale(12, 0.1),
    lineHeight: moderateScale(14, 0.1),
    color: black,
    fontWeight: '700',
    paddingVertical: moderateScale(5, 0.1),
  },
  txt1: {
    fontSize: moderateScale(20, 0.1),
    lineHeight: moderateScale(24, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
  },
  txt2: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    fontWeight: '300',
    alignSelf: 'center',
  },
  txt3: {
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(17, 0.1),
    color: black,
    fontWeight: '300',
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
    marginVertical: moderateScale(20, 0.1),
    marginBottom: moderateScale(50, 0.1),
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

  link: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  vector: {
    // flex: 1,
    // height: moderateScale(50, 0.1),
    // backgroundColor: 'yellow',
    // position: 'absolute',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    // bottom: 0,
  },
});

export default styles;
