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
import SelectDropdown from 'react-native-select-dropdown';
import {populateEvents} from 'react-native-calendars/src/timeline/Packer';

const Input = ({placeholder, value, setValue, type, maxLength, style}) => {
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [isActive, setIsActive] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showPass, setshowPass] = useState(true);
  const [showConfPass, setShowConfpass] = useState(true);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [dob, setDob] = useState(null);
  const [expected, setExpected] = useState(null);
  const [conception, setConception] = useState(null);
  const hour = ['01', '02', '03', '04'];
  const relation = ['Mother', 'Wife', 'Sister', 'other'];
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDob(date.toDateString());
    hideDatePicker();
  };
  const Econfirm = date => {
    console.warn('A date has been picked: ', date);
    setExpected(toDateString());
    hideDatePicker();
  };
  const Cdate = date => {
    console.warn('A date has been picked: ', date);
    setConception(toDateString());
    hideDatePicker();
  };
  return (
    <View style={styles.inputContainer}>
      {(type === 'DOB' ||
        type === 'expected date' ||
        type === 'conception date') && (
        <>
          <View
            style={[
              styles.input,
              {
                flexDirection: 'row',
                justifyContent: 'flex-start',
              },
              style,
            ]}>
            <TextInput
              editable={false}
              placeholderTextColor={'#929292'}
              style={{
                flex: 0.9,
                alignContent: 'center',
                paddingVertical: moderateScale(2, 0.1),
                left: moderateScale(-5, 0.1),
                color: black,
              }}
              value={
                type === 'DOB'
                  ? dob
                  : type === 'expected date'
                  ? expected
                  : type === 'conception date'
                  ? conception
                  : null
              }
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
              onConfirm={
                type === 'DOB'
                  ? handleConfirm
                  : type === 'expected date'
                  ? Econfirm
                  : type === 'conception date'
                  ? Cdate
                  : null
              }
              onCancel={hideDatePicker}
            />
          </View>
        </>
      )}
      {type === 'text' && (
        <TextInput
          placeholderTextColor={'#929292'}
          style={[
            styles.input,
            {
              alignItems: 'center',
              paddingVertical: moderateScale(2, 0.1),
              color: black,
            },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
        />
      )}
      {type === 'reminder' && (
        <TextInput
          placeholderTextColor={'#929292'}
          style={[
            styles.input,
            {
              paddingVertical: moderateScale(2, 0.1),
              color: black,
            },
          ]}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
          multiline={true}
          numberOfLines={3}
        />
      )}
      {type === 'number' && (
        <TextInput
          placeholderTextColor={'#929292'}
          style={[
            styles.input,
            {paddingVertical: moderateScale(2, 0.1), color: black},
          ]}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onChangeText={setValue}
          onFocus={() => setIsActive(true)}
          onBlur={() => setIsActive(false)}
          keyboardType={'numeric'}
        />
      )}
      {type === 'email' && (
        <TextInput
          placeholderTextColor={'#929292'}
          style={[styles.input, style, {color: black}]}
          placeholder={placeholder}
          value={value}
          onChangeText={setValue}
        />
      )}
      {type === 'password' && (
        <>
          <View
            style={[
              styles.input,
              {flexDirection: 'row', alignItems: 'center'},
            ]}>
            <TextInput
              style={{
                flex: 0.9,
                paddingVertical: moderateScale(2, 0.1),
                color: black,
              }}
              placeholderTextColor={'#929292'}
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
          <View
            style={[
              styles.input,
              {
                flexDirection: 'row',
                alignItems: 'center',
              },
            ]}>
            <TextInput
              style={{
                flex: 0.9,
                paddingVertical: moderateScale(2, 0.1),
                color: black,
              }}
              placeholderTextColor={'#929292'}
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
      {type === 'relation' ||
        (type === 'hourOptions' && (
          <SelectDropdown
            data={
              type === 'relation'
                ? relation
                : type === 'hourOptions'
                ? hour
                : null
            }
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            defaultButtonText={placeholder}
            buttonStyle={[
              styles.input,
              {
                justifyContent: 'space-between',
                alignItems: 'center',
                // backgroundColor: '#D9D9D9',
              },
              style,
            ]}
            buttonTextStyle={{
              color: '#929292',

              textAlign: 'center',
              right: moderateScale(-80, 0.1),
              fontSize: moderateScale(13, 0.1),
            }}
            renderDropdownIcon={() => {
              return (
                <Entypo
                  name="chevron-down"
                  size={18}
                  color={black}
                  style={styles.icon}
                />
              );
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          // <View style={[styles.input, {flexDirection: 'row'}, style]}>
          //   <TextInput
          //     placeholderTextColor={'#929292'}
          //     style={{flex: 0.9, paddingVertical: moderateScale(5, 0.1)}}
          //     placeholder={placeholder}
          //     onChangeText={setValue}
          //   />

          //   <TouchableOpacity
          //     style={{
          //       alignSelf: 'center',
          //       flex: 0.1,
          //     }}>
          //     <Entypo
          //       name="chevron-down"
          //       size={18}
          //       color={black}
          //       style={styles.icon}
          //     />
          //   </TouchableOpacity>
          // </View>
        ))}
      {type === 'relation' && (
        <SelectDropdown
          data={
            type === 'relation'
              ? relation
              : type === 'hourOptions'
              ? hour
              : null
          }
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          defaultButtonText={placeholder}
          buttonStyle={[
            styles.input,
            {
              justifyContent: 'space-between',
              alignItems: 'center',
              // backgroundColor: '#D9D9D9',
            },
            style,
          ]}
          buttonTextStyle={{
            color: '#929292',

            textAlign: 'center',
            right: moderateScale(-80, 0.1),
            fontSize: moderateScale(13, 0.1),
          }}
          renderDropdownIcon={() => {
            return (
              <Entypo
                name="chevron-down"
                size={18}
                color={black}
                style={styles.icon}
              />
            );
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
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
    alignItems: 'center',
    backgroundColor: white,
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
