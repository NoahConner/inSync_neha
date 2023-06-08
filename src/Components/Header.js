import React, {useState, useContext, useEffect} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {black, white} from '../Constants/index';
import Inicon from 'react-native-vector-icons/Ionicons';

const Header = ({props, navigation}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => props.navigation.goBack()}>
      <Inicon name="arrow-back" size={moderateScale(22)} color={white} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    backgroundColor: black,
    width: moderateScale(35, 0.1),
    height: moderateScale(35, 0.1),
    borderRadius: moderateScale(20, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    // paddingVertical: moderateScale(5),
    // height: moderateScale(65),
    marginLeft: moderateScale(10, 0),
    marginBottom: moderateScale(-30, 0.1),
  },
});
export default Header;
