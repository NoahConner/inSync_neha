import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, screenHeight, screenWidth} from '../../../Constants';

const Poppins = '';
const PoppinsBold = '';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    paddingHorizontal: moderateScale(20, 0.1),
  },
  imgRow1: {
    paddingTop: moderateScale(18, 0.1),
    flexDirection: 'row',
    // justifyContent: 'space-between',
  },
  imgRow2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: moderateScale(30, 0.1),
  },
  i4: {
    // backgroundColor: 'red',
    top: moderateScale(18, 0.1),
  },
  i13: {
    top: moderateScale(18, 0.1),
  },
  i14: {
    // backgroundColor: 'red',
    left: moderateScale(-43),
  },
  i1: {
    // position: 'relative',
    alignSelf: 'center',
    top: moderateScale(15, 0.1),
    left: moderateScale(-10, 0.1),
  },
  btn: {
    // alignItems: 'center',
    // justifyContent: 'center',
    flexDirection: 'column',
    // justifyContent: 'space-between',
    top: moderateScale(68, 0.1),
  },
  i13: {
    // position: 'absolute',
    width: moderateScale(179, 0.1),
    height: moderateScale(164, 0.1),
    left: moderateScale(10, 0.1),
    top: moderateScale(12, 0.1),
  },
});

export default styles;
