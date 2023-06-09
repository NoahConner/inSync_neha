import React, {useState, useEffect} from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Modal,
} from 'react-native';
import {black, purple, emailReg, screenWidth, white} from '../Constants/index';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
import Button from './Button';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
const Input = ({
  placeholder,
  value,
  setValue,
  type,
  style,
  placeholderTextColor,
  textAlign,
  fontFamily,
  fontSize,
  disabled,
}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfpass] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };
  return (
    <View style={styles.inputContainer}>
      {(type === 'DOB' ||
        type === 'cycle' ||
        type === 'expected date' ||
        type === 'period duration') && (
        <>
          <View style={[styles.input, {flexDirection: 'row'}]}>
            <TextInput
              placeholderTextColor={black}
              style={{flex: 0.9}}
              placeholder={placeholder}
              // value={selectedDate.toDateString()}
              onChangeText={setValue}
            />

            <TouchableOpacity
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}
              onPress={showDatePicker}>
              <Icon
                name="calendar-alt"
                size={18}
                color={black}
                style={styles.icon}
              />
            </TouchableOpacity>

            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
            />
          </View>
        </>
      )}
      {type === 'text' && (
        <TextInput
          placeholderTextColor={black}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          // onFocus={() => setIsActive(true)}
          // onBlur={() => setIsActive(false)}
        />
      )}
      {type === 'number' && (
        <TextInput
          placeholderTextColor={black}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          keyboardType={'numeric'}
        />
      )}
      {type === 'email' && (
        <TextInput
          placeholderTextColor={black}
          style={styles.input}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
        />
      )}
      {type === 'password' && (
        <>
          <View style={[styles.input, {flexDirection: 'row'}]}>
            <TextInput
              style={{flex: 0.9}}
              placeholderTextColor={black}
              placeholder={placeholder}
              value={value}
              onChangeText={setValue}
              secureTextEntry={showPass}
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}
              onPress={() => setshowPass(!showPass)}>
              <Feather
                name={showPass ? 'eye' : 'eye-off'}
                color={black}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
      {type === 'Confirm password' && (
        <>
          <View style={[styles.input, {flexDirection: 'row'}]}>
            <TextInput
              style={{flex: 0.9}}
              placeholderTextColor={black}
              placeholder={placeholder}
              value={value}
              onChangeText={setValue}
              secureTextEntry={showConfPass}
            />
            <TouchableOpacity
              style={{
                alignSelf: 'center',
                flex: 0.1,
              }}
              onPress={() => setShowConfpass(!showConfPass)}>
              <Feather
                name={showConfPass ? 'eye' : 'eye-off'}
                color={black}
                size={20}
              />
            </TouchableOpacity>
          </View>
        </>
      )}
      {type === 'relation' && (
        <View style={[styles.input, {flexDirection: 'row'}]}>
          <TextInput
            placeholderTextColor={black}
            style={{flex: 0.9}}
            placeholder={placeholder}
            onChangeText={setValue}
          />

          <TouchableOpacity
            style={{
              alignSelf: 'center',
              flex: 0.1,
            }}>
            <Entypo
              name="chevron-down"
              size={18}
              color={black}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: moderateScale(7, 0.1),
  },
  activeContainer: {
    borderBottomColor: purple,
  },
  input: {
    width: moderateScale(270, 0.1),
    height: moderateScale(37, 0.1),
    borderColor: black,
    borderWidth: 1,
    // textAlign: 'center',
    paddingHorizontal: moderateScale(12, 0.1),
    // backgroundColor:'red'
  },
  eyeButton: {
    padding: 8,
  },
  icon: {
    // padding: 8,
    paddingLeft: moderateScale(6.5, 0.1),
  },
});

export default Input;
