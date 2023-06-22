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
    paddingHorizontal: moderateScale(20, 0.1),
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    fontWeight: '700',
    textAlign: 'center',
    // alignSelf: 'center',
    fontFamily: 'Rubik-Regular',
    paddingTop: moderateScale(20,0.1)
  },
  imgIcon: {
    width: moderateScale(85, 0.1),
    height: moderateScale(85, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
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
    width: moderateScale(300, 0.1),
    // height: '50%',
    flexWrap: 'wrap',
    marginVertical: moderateScale(20, 0.1),
  },
  box: {
    marginVertical: moderateScale(10, 0.1),
    // marginHorizontal: moderateScale(1, 0.1)
    width: moderateScale(110, 0.1),
    height: moderateScale(128, 0.1),
    backgroundColor: '#F1F1F1',
    justifyContent: 'center',
    alignItems: 'center',

    // paddingHorizontal: moderateScale(13, 0.1),
  },
  Ttxt: {
    color: 'black',
    fontSize: moderateScale(12, 0.1),
    lineHeight: moderateScale(14, 0.1),
    fontWeight: '800',
    textAlign: 'center',
    // paddingVertical: moderateScale(5, 0.1),
  },
  vector: {
    right: 0,
    position: 'absolute',
    bottom: 0,
  },
});

export default styles;
