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
  backImg: {
    flex: 1,
    backgroundColor: backgroundColor,
    height: '100%',
    width: '100%',
  },
  center: {
    alignSelf: 'center',
    top: moderateScale(87, 0.1),
    height: '87%',
  },
  txt1: {
    fontSize: moderateScale(25, 0.1),
    lineHeight: moderateScale(30, 0.1),
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
  view1: {
    paddingHorizontal: moderateScale(30, 0.1),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    // alignItems: 'center',
    width: 300,
    height: '50%',
    flexWrap: 'wrap',
    // marginVertical: moderateScale(12, 0.1),
  },
  box: {
    marginVertical: moderateScale(10, 0.1),
    // marginHorizontal: moderateScale(1, 0.1)
    width: moderateScale(100, 0.1),
    height: moderateScale(90, 0.1),
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',

    // paddingHorizontal: moderateScale(13, 0.1),
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
});

export default styles;
