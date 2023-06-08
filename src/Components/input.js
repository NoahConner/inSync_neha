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
// import Icon from 'react-native-vector-icons/FontAwesome5';
// import DatePicker from 'react-native-date-picker';
import Button from './Button';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';

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
  const [showModal, setShowModal] = useState(false);
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfpass] = useState(true);
  return (
    <View style={styles.inputContainer}>
      {/* {type === 'date' && (
        <>
          <TextInput
            disabled={disabled}
            editable={!disabled}
            selectTextOnFocus={!disabled}
            placeholderTextColor={placeholderTextColor}
            style={styles.input}
            placeholder={placeholder}
            value={selectedDate.toDateString()}
            onChangeText={setValue}
            onFocus={() => setIsActive(true)}
            onBlur={() => setIsActive(false)}
            textAlign={textAlign}
            fontFamily={fontFamily}
            fontSize={fontSize}
          />
          <TouchableOpacity
            style={styles.calendarButton}
            onPress={() => setShowModal(true)}>
            <Icon name="calendar-alt" size={15} color={purple} />
          </TouchableOpacity>
          <Modal
            visible={showModal}
            transparent
            animationType="slide"
            onRequestClose={() => setShowModal(false)}>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <View style={styles.rowContainer}>
                  <DatePicker
                    date={selectedDate}
                    onDateChange={handleDateChange}
                    mode="date"
                    textColor={black}
                    style={styles.datePicker}
                  />
                  <View style={styles.buttonContainer}>
                    <Button
                      style={styles.modalButton}
                      fontSize={moderateScale(14)}
                      backgroundColor={purple}
                      color={white}
                      text="Select"
                      padding={moderateScale(0)}
                      textAlign="center"
                      borderRadius={moderateScale(0)}
                      width={moderateScale(screenWidth / 2 - 30)}
                      onPress={() => {
                        setValue(selectedDate.toISOString());
                        setShowModal(false);
                      }}
                    />
                    <Button
                      style={styles.modalButton}
                      fontSize={moderateScale(14)}
                      backgroundColor={red}
                      color={white}
                      text="Cancel"
                      padding={moderateScale(0)}
                      textAlign="center"
                      borderRadius={moderateScale(0)}
                      width={moderateScale(screenWidth / 2 - 30)}
                      onPress={() => {
                        setShowModal(false);
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
          </Modal>
        </>
      )} */}
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
  calendarButton: {
    padding: 8,
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: white,
    borderRadius: 10,
    padding: 16,
    width: screenWidth,
    alignSelf: 'center',
  },
  modalCloseButton: {
    marginTop: 16,
    alignSelf: 'flex-end',
  },
  modalCloseButtonText: {
    color: purple,
    fontWeight: 'bold',
  },
  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalButton: {
    padding: moderateScale(10),
    borderRadius: moderateScale(10),
  },
});

export default Input;
