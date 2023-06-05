import React from 'react';
import {
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import CutomImage from './CutomImage';

const customImage = ({width, height, image}) => {
  return <Image style={[{width, height}]} source={{image}} />;
};

const styles = StyleSheet.create({
  // buttonText: {
  //   textAlign: 'center',
  //   fontSize: moderateScale(14, 0.1),
  //   lineHeight: moderateScale(17, 0.1),
  // },
  // button: {
  //   backgroundColor: black,
  //   width: moderateScale(173, 0.1),
  //   height: moderateScale(40, 0.1),
  //   borderWidth: 1,
  //   borderColor: white,
  //   color: white,
  // },
  // disabledText: {
  //   color: white,
  // },
});

export default customImage;
