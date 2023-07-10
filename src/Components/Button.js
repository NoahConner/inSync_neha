import React from 'react';
import {
  Text,
  TouchableOpacity,
  ActivityIndicator,
  StyleSheet,
  View,
} from 'react-native';
import {white, black, backgroundColor} from '../Constants/index';
import {moderateScale} from 'react-native-size-matters';
import Ionicons from 'react-native-vector-icons/Ionicons';

const rubic = '';
const CutomButton = ({
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
  iconName,
  type,
  Ctext,
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      activeOpacity={0.8}
      onPress={onPress}>
      <View style={styles.view}>
        {type === 'camera' ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignContent: 'center',
            }}>
            <View>
              <Ionicons
                name={iconName}
                size={moderateScale(20, 0.1)}
                color={'#fff'}
              />
            </View>
            <Text style={[styles.buttonText]}>{Ctext}</Text>
          </View>
        ) :    <Text style={[styles.buttonText]}>{text}</Text> }
     
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(14, 0.1),
    lineHeight: moderateScale(17, 0.1),
    color: white,
  },
  button: {
    backgroundColor: black,
    justifyContent: 'center',
    width: moderateScale(156, 0.1),
    height: moderateScale(40, 0.1),
    color: white,
    // marginTop: moderateScale(-10),
  },
  view: {
    backgroundColor: black,
    justifyContent: 'center',
    width: moderateScale(146, 0.1),
    height: moderateScale(34, 0.1),
    borderWidth: 1,
    borderColor: white,
    color: white,
    alignSelf: 'center',
    // justifyContent: 'center',
  },
  disabledText: {
    color: white,
  },
});

export default CutomButton;
