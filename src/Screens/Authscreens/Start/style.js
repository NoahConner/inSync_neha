import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, screenHeight, screenWidth} from '../../../Constants';

const Poppins = '';
const PoppinsBold = '';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
    // paddingHorizontal: moderateScale(20, 0.1),
    position: 'relative',
  },
  backImg: {
    position: 'relative',
    flex: 1,
    backgroundColor: backgroundColor,
    height: screenHeight,
    width: screenWidth,
  },
  arrow: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  arrImg: {
    height: 130,
    width: 60,
  },
  center: {
    alignSelf: 'center',
  },
  logo: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: moderateScale(10, 0.1),
    height: moderateScale(150, 0.1),
    width: moderateScale(134, 0.1),
  },
  text: {
    marginVertical: moderateScale(-40, 0.1),
    justifyContent: 'center',
    height: moderateScale(100, 0.1),
  },
  imgRow1: {
    paddingTop: moderateScale(18, 0.1),
    flexDirection: 'row',
  },
  imgRow2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    left: moderateScale(30, 0.1),
  },
  i4: {
    top: moderateScale(18, 0.1),
  },
  i13: {
    top: moderateScale(18, 0.1),
  },
  i14: {
    left: moderateScale(-43),
  },
  i1: {
    alignSelf: 'center',
    top: moderateScale(15, 0.1),
    left: moderateScale(-10, 0.1),
  },
  btn: {
    marginVertical: moderateScale(12, 0.1),
    marginTop: moderateScale(-10, 0.1),
    flexDirection: 'column',
  },
  i13: {
    // position: 'absolute',
    width: moderateScale(179, 0.1),
    height: moderateScale(164, 0.1),
    left: moderateScale(10, 0.1),
    top: moderateScale(12, 0.1),
  },
  vector: {
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
