import {Dimensions, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor} from '../../../Constants';

const Poppins = '';
const PoppinsBold = '';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: backgroundColor,
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
