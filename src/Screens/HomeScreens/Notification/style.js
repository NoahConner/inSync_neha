import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  black,
  screenHeight,
  screenWidth,
} from '../../../Constants';
const robik = 'Rubik-Black';

const styles = StyleSheet.create({
  vector: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  txt1: {
    fontSize: moderateScale(22, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
    fontFamily: 'Rubik-Bold',
  },
  center: {
    top: moderateScale(10, 0.1),
    // paddingHorizontal: moderateScale(20, 0.1),
  },
  container: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: moderateScale(50, 0.1),
    marginBottom: moderateScale(10, 0.1),

    // bottom: moderateScale(-10, 0.1),
    borderRadius: moderateScale(5, 0.1),
  },
  txt: {
    paddingBottom: moderateScale(6, 0.1),
    color: black,
    fontSize: moderateScale(13, 0.1),
    lineHeight: moderateScale(14, 0.1),
    fontFamily: robik,
  },
  viewT: {
    borderBottomWidth: 2,
    borderBottomColor: black,
  },
});

export default styles;
