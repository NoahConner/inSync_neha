import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, black} from '../../../Constants';
const robik = 'Rubik-Black';
const styles = StyleSheet.create({
  backImg: {
    flex: 1,
    backgroundColor: backgroundColor,
    height: '100%',
    width: '100%',
  },
  vector: {
    bottom: 0,
    right: 0,
    position: 'absolute',
  },
  txt1: {
    fontSize: moderateScale(24, 0.1),
    lineHeight: moderateScale(26, 0.1),
    color: black,
    // fontWeight: '700',
    alignSelf: 'center',
    fontFamily: 'Rubik-Bold',
  },
  center: {
    paddingHorizontal: moderateScale(20, 0.1),
  },
  btn: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(18, 0.1),
  },
});

export default styles;
