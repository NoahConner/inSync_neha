import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {white, black, backgroundColor} from '../Constants/index';
import {moderateScale} from 'react-native-size-matters';

const Button = ({
  backgroundColor,
  text,
  width,
  onPress,
  color,
  textAlign,
  borderRadius,
  padding,
  fontSize,
  style,
  fontFamily,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.buttonText]}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(17, 0.1),
  },
  button: {
    backgroundColor: black,
    width: moderateScale(173, 0.1),
    height: moderateScale(40, 0.1),
    borderWidth: 1,
    borderColor: white,
    color: white,
  },
  disabledText: {
    color: white,
  },
});

export default Button;
