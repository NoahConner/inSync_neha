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
    backgroundColor: 'red',
    // position: 'relative',
  },
  backImg: {
    position: 'absolute',
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(83, 0.1),
    // backgroundColor: 'red',
    height: '83%',
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
    fontFamily: robik,
  },
  txt2: {
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(20, 0.1),
    color: black,
    fontWeight: '300',
    alignSelf: 'center',
    fontFamily: robik,
  },
  txt3: {
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(17, 0.1),
    color: black,
    fontWeight: '300',
    textAlign: 'center',
    fontFamily: robik,
  },

  input: {
    marginVertical: moderateScale(10, 0.1),
    fontFamily: robik,
  },
  fTxt: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    fontFamily: robik,
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',

    marginTop: moderateScale(25, 0.1),
  },
  Ftxt: {
    color: 'black',
    fontSize: moderateScale(12, 0.1),
    fontFamily: robik,
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
    paddingVertical: moderateScale(20, 0.1),
    // bottom: moderateScale(5, 0.1),
  },
  link: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: moderateScale(5, 0.1),
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: -1,
    // position: 'absolute',
  },
});

export default styles;
