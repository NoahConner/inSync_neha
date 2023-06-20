import {Dimensions, Platform, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  black,
  screenHeight,
  screenWidth,
} from '../../../Constants';

const styles = StyleSheet.create({
  backImg: {
    flex: 1,
    backgroundColor: backgroundColor,
    height: screenHeight,
    flexGrow: 1,
    width: screenWidth,
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
  txt1: {
    fontSize: moderateScale(20, 0.1),
    lineHeight: moderateScale(24, 0.1),
    color: black,
    fontWeight: '700',
    alignSelf: 'center',
  },
  center: {
    paddingHorizontal: moderateScale(20, 0.1),
    top: moderateScale(45, 0.1),
  },
  container: {
    // width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: moderateScale(30, 0.1),
    bottom: moderateScale(-10, 0.1),
    borderRadius: moderateScale(5, 0.1),
  },
  txt: {
    paddingBottom: moderateScale(6, 0.1),
    color: black,
    fontWeight: '800',
    fontSize: moderateScale(13, 0.1),
    lineHeight: moderateScale(14, 0.1),
  },
  viewT: {
    borderBottomWidth: 1,
    borderBottomColor: black,
  },
});

export default styles;
