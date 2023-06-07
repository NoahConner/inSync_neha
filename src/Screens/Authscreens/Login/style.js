import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {
  backgroundColor,
  screenHeight,
  screenWidth,
  black,
} from '../../../Constants';

const Poppins = '';
const PoppinsBold = '';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    // position: 'relative',
  },
  backImg: {
    flex: 1,
    backgroundColor: backgroundColor,
    // position: 'absolute',
    height: '100%',
    width: '100%',
    // alignSelf:'stretch'

  },
  center: {
    alignSelf: 'center',
    top: moderateScale(90, 0.1),
    height: '50%',
  },
  txt1: {
    fontSize: moderateScale(30, 0.1),
    lineHeight: moderateScale(36, 0.1),
    color: black,
    fontWeight: moderateScale(400, 0.1),
    alignSelf: 'center',
  },
  txt2: {
    fontSize: moderateScale(20, 0.1),
    lineHeight: moderateScale(24, 0.1),
    color: black,
    fontWeight: moderateScale(300, 0.1),
    alignSelf: 'center',
  },
  input: {
    marginVertical: moderateScale(30, 0.1),
  },
  fTxt:{
    justifyContent:'flex-end',
    alignItems:'flex-end'
  },
  btn:{
    justifyContent:'center',
    alignItems:'center',
    marginVertical: moderateScale(15,0.1)
  }
});

export default styles;
