import React, { useState, useEffect } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Switch,
  Image,
} from 'react-native';
import { black, purple, emailReg, screenWidth, white } from '../Constants/index';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from './Button';
import { moderateScale } from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';

const Account = ({
  type,
  text,
  text1,
  text2,
  text3,
  style,
  onPress1,
  onPress2,
  onPress3,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const toggleSwitch1 = () => {
    setIsEnabled1(previousState => !previousState);
  };
  const toggleSwitch2 = () => {
    setIsEnabled2(previousState => !previousState);
  };

  return (
    <View style={styles.inputContainer}>
      {type === 'account' && (
        <>
          <View style={[styles.input, { borderBottomWidth: 1, 
            marginBottom: moderateScale(7, 0.1), justifyContent: 'flex-start' }, style,]}>
            <View
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <AntDesign
                name="user"
                size={22}
                color={black}
                style={styles.icon}
              />
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.heading}> {text} </Text>
            </View>
          </View>
          <View style={[styles.input, style]}>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.txt}> {text1} </Text>
            </View>

            <TouchableOpacity
              onPress={onPress1}
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <Icon
                name="keyboard-arrow-right"
                size={18}
                color={black}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.input, style]}>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.txt}> {text2} </Text>
            </View>

            <TouchableOpacity
              onPress={onPress2}
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <Icon
                name="keyboard-arrow-right"
                size={18}
                color={black}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
      {type === 'notification' && (
        <>
          <View style={[styles.input, { borderBottomWidth: 1, marginBottom: moderateScale(7, 0.1) }, style]}>
            <View
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <Icon1
                name="notifications-outline"
                size={22}
                color={black}
                style={styles.icon}
              />
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.heading}> {text} </Text>
            </View>
          </View>
          <View style={[styles.input, style]}>
            <View style={{ flex: 0.6 }}>
              <Text style={styles.txt}> {text1} </Text>
            </View>
            <View style={{ flex: 0.4 }}>
              <Switch
                trackColor={{ false: '#D9D9D9', true: '#D9D9D9' }}
                thumbColor={isEnabled1 ? '#006B58' : '#FC0F0F'}
                onValueChange={toggleSwitch1}
                value={isEnabled1}
              />
            </View>
          </View>
          <View style={[styles.input, style]}>
            <View style={{ flex: 0.6 }}>
              <Text style={styles.txt}> {text2} </Text>
            </View>
            <View style={{ flex: 0.4 }}>
              <Switch
                trackColor={{ false: '#D9D9D9', true: '#D9D9D9' }}
                thumbColor={isEnabled2 ? '#006B58' : '#FC0F0F'}
                onValueChange={toggleSwitch2}
                value={isEnabled2}
              />
            </View>
          </View>
        </>
      )}
      {type === 'More' && (
        <>
          <View style={[styles.input, { borderBottomWidth: 1, marginBottom: moderateScale(7, 0.1) }, style]}>
            <View
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <Image
                source={require('../assets/images/PNG/more.png')}
                style={{
                  width: moderateScale(16, 0.1),
                  height: moderateScale(16, 0.1),
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'black',
                }}
              />
            </View>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.heading}> {text} </Text>
            </View>
          </View>
          <View style={[styles.input, style]}>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.txt}> {text1} </Text>
            </View>

            <TouchableOpacity
              onPress={onPress1}
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <Icon
                name="keyboard-arrow-right"
                size={18}
                color={black}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.input, style]}>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.txt}> {text2} </Text>
            </View>

            <TouchableOpacity
              onPress={onPress2}
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <Icon
                name="keyboard-arrow-right"
                size={18}
                color={black}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
          <View style={[styles.input, style]}>
            <View style={{ flex: 0.9 }}>
              <Text style={styles.txt}> {text3} </Text>
            </View>

            <TouchableOpacity
              onPress={onPress3}
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}>
              <Icon
                name="keyboard-arrow-right"
                size={18}
                color={black}
                style={styles.icon}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(8, 0.1),
  },
  activeContainer: {
    borderBottomColor: purple,
  },
  txt: {
    color: '#878787',
    fontSize: moderateScale(12, 0.1),
    lineHeight: moderateScale(14, 0.1),
    fontWeight: '300',
  },
  heading: {
    color: black,
    fontSize: moderateScale(15, 0.1),
    lineHeight: moderateScale(18, 0.1),
    fontWeight: '500',
  },
  input: {
    flexDirection: 'row',
    width: moderateScale(280, 0.1),
    height: moderateScale(37, 0.1),
    borderColor: black,
    borderBottomColor: '#9A9A9A',
    alignItems: 'center',
    paddingHorizontal: moderateScale(12, 0.1),

  },
  eyeButton: {
    padding: 8,
  },
  icon: {
    // padding: 8,
    // paddingLeft: moderateScale(6.5, 0.1),
  },
});

export default Account;
