import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, black} from '../../../../Constants';
import {screenWidth, screenHeight} from '../../../../Constants';

const robik = 'Rubik-Black';

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
    paddingHorizontal: moderateScale(20, 0.1),
  },
  imgView: {
    marginVertical: moderateScale(25, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: moderateScale(76, 0.1),
    height: moderateScale(76, 0.1),
    borderRadius: moderateScale(76 / 2, 0.1),
  },
  name: {
    fontSize: moderateScale(12, 0.1),
    lineHeight: moderateScale(14, 0.1),
    color: black,
    // fontWeight: '700',
    fontFamily: 'Rubik-Bold',
    paddingVertical: moderateScale(5, 0.1),
    textAlign: 'center',
  },
  name1: {
    fontSize: moderateScale(20, 0.1),
    lineHeight: moderateScale(22, 0.1),
    color: black,
    fontFamily: 'Rubik-Bold',
    // paddingVertical: moderateScale(5, 0.1),
    paddingBottom: moderateScale(10, 0.1),
    textAlign: 'center',
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    // fontWeight: '700',
    alignSelf: 'center',
    fontFamily: 'Rubik-Bold',
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
    alignItems: 'center',
    // marginVertical: moderateScale(10, 0.1),
  },
  fTxt: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(20, 0.1),
    marginBottom: moderateScale(40, 0.1),
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
  fView: {
    flexDirection: 'row',
    paddingHorizontal: moderateScale(3, 0.1),
    justifyContent: 'space-between',
    width: moderateScale(270, 0.1),
    height: moderateScale(37, 0.1),
    borderColor: black,
    borderWidth: 1,
    marginVertical: moderateScale(4, 0.1),

    // alignItems: 'center',
    backgroundColor: 'white',
    // textAlign: 'center',
    // paddingHorizontal: moderateScale(12, 0.1),
  },
  fInside: {
    flex: 0.5,
  },
  fInside2: {
    flex: 0.5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  txt: {
    color: 'black',
    fontFamily: 'Rubik-Medium',
    fontSize: moderateScale(12, 0.1),
  },
  edit: {
    // width: moderateScale(18, 0.1),
    // height: moderateScale(18, 0.1),
    // borderRadius: moderateScale(18 / 2, 0.1),
    // // padding: moderateScale(5, 0.1),
    // justifyContent: 'center',
    // alignItems: 'center',
    // borderWidth: moderateScale(1, 0.1),
  },
  circle: {
    backgroundColor: '#474646',
    width: moderateScale(25, 0.1),
    height: moderateScale(25, 0.1),
    borderRadius: moderateScale(25 / 2, 0.1),
    justifyContent: 'center',
    alignItems: 'center',
    bottom: moderateScale(27, 0.1),
    left: moderateScale(25, 0.1),
  },
  link: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  vector: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
});

export default styles;
