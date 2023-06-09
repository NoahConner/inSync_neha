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
  backImg: {
    flex: 1,
    backgroundColor: backgroundColor,
    height: '100%',
    width: '100%',
  },
  vector: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    bottom: 0,
  },
});

export default styles;
