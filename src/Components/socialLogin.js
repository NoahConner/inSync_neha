import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View, Image} from 'react-native';
import {white, black, backgroundColor} from '../Constants/index';
import {moderateScale} from 'react-native-size-matters';

const rubic = '';
const SocialLogin = ({onPress, source}) => {
  return (
    <TouchableOpacity style={styles.b} activeOpacity={0.8} onPress={onPress}>
      <View style={styles.v}>
        <Image source={source} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  b: {
    width: moderateScale(115, 0.1),
    height: moderateScale(30, 0.1),
    color: white,

    // marginTop: moderateScale(-10),
  },
  v: {
    justifyContent: 'center',
    alignItems: 'center',
    width: moderateScale(90, 0.1),
    height: moderateScale(45, 0.1),
    borderWidth: 1,
    borderColor: black,
    // color: white,
    alignSelf: 'center',
  },
});

export default SocialLogin;
