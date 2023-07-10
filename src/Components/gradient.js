import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import {moderateScale} from 'react-native-size-matters';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  backgroundColor,
  black,
  linearGradient,
  white,
  screenWidth,
} from '../Constants/index';
import LinearGradient from 'react-native-linear-gradient';
import {BarChart} from 'react-native-chart-kit';
import ModalView from './Modal';
import {AppContext, useAppContext} from '../Context/AppContext';
export function Linear({type, text1, text2, text3}) {
  const data = {
    labels: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    datasets: [
      {
        data: [40, 84, 56, 40, 80, 55, 60, 40, 50, 75, 60, 90],
      },
    ],
    legend: ['Rainy Days'], // optional
  };
  const [checked, setChecked] = React.useState(false);
  const {setExpected, setPeriod, period, expected} = useAppContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (checked) {
      setModalVisible(true);
    }
  }, [checked]);

  return (
    <LinearGradient
      colors={linearGradient}
      end={{x: 1, y: 1}}
      start={{x: 1, y: 0}}
      style={{
        marginVertical: moderateScale(18, 0.1),
      }}>
      {type === 'text' ? (
        <View
          style={{
            height: moderateScale(131, 0.1),
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={[
              styles.buttonText,
              {
                lineHeight: moderateScale(53, 0.1),
                fontSize: moderateScale(45, 0.1),
                fontFamily: 'Rubik-Bold',
              },
            ]}>
            {' '}
            {text1}{' '}
          </Text>
          <Text
            style={[
              styles.buttonText,
              {
                fontSize: moderateScale(15, 0.1),
                lineHeight: moderateScale(18, 0.1),
                marginVertical: moderateScale(2, 0.1),
                color: '#B5B5B5',
                fontFamily: 'Rubik-Regular',
              },
            ]}>
            {text2}
          </Text>
          <Text
            style={[
              styles.buttonText,
              {
                fontSize: moderateScale(15, 0.1),
                lineHeight: moderateScale(18, 0.1),
                color: '#B5B5B5',
                fontFamily: 'Rubik-Regular',
              },
            ]}>
            {text3}
          </Text>
        </View>
      ) : null}

      {type === 'graph' ? (
        <View
          style={{
            paddingTop: moderateScale(20, 0.1),
            paddingTop: moderateScale(20, 0.1),
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingHorizontal: moderateScale(20, 0.1),
            }}>
            <View>
              <Text
                style={{
                  width: '60%',
                  color: white,
                  fontSize: moderateScale(16, 0.1),
                  fontFamily: 'Rubik-Regular',
                }}>
                Chances Of Getting Pregnant
              </Text>
            </View>
            <View>
              <Text
                style={{
                  color: white,
                  fontSize: moderateScale(11, 0.1),
                  fontFamily: 'Rubik-Regular',
                }}>
                Are You {'\n'}
                Expecting?
              </Text>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  paddingVertical: 10,
                }}
                onPress={() => {
                  setChecked(!checked);
                }}>
                <View
                  style={{
                    padding: 3,
                    backgroundColor: '#D9D9D9',
                    borderRadius: 2,
                    marginRight: 5,
                  }}>
                  <Entypo
                    name="check"
                    size={14}
                    color={checked ? black : '#D9D9D9'}
                  />
                </View>
                <Text
                  style={{
                    color: white,
                    fontFamily: 'Rubik-Regular',
                    fontSize: 11,
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'flex-start',
              marginTop: -20,
            }}>
            <BarChart
              data={data}
              width={moderateScale(screenWidth + 30, 0.1)}
              height={moderateScale(180, 0.1)}
              yAxisSuffix="%"
              withInnerLines={false}
              chartConfig={{
                fillShadowGradient: white,
                fillShadowGradientOpacity: 1,
                backgroundGradientFromOpacity: 0,
                backgroundGradientFrom: 'white',
                backgroundGradientToOpacity: 0,
                color: (opacity = 1) => 'white',
                barPercentage: 0.25,
                decimalPlaces: 0,
              }}
              fromZero={true}
              showBarTops={true}
              style={{
                left: moderateScale(-7, 0.1),
                transform: [{scale: 0.8}],
              }}
            />
          </View>
        </View>
      ) : null}
      <ModalView
        visible={modalVisible}
        text={'Fill This Form'}
        cancel={() => setModalVisible(!modalVisible)}
        close={() => {
          setExpected(true);
          setModalVisible(!modalVisible);
        }}
      />
    </LinearGradient>
  );
}
export function Calender({type}) {
  return (
    <Calendar
      style={{
        height: 350,
      }}
      theme={{
        textDisabledColor: '#B5B5B5',
        monthTextColor: black,
        arrowColor: black,
        dayTextColor: 'gray',
      }}
      onDayPress={day => {
        console.log('selected day', day);
      }}
      // markingType={'period'}
      // markedDates={{
      //   '2023-06-18': {startingDay: true, color: '#F2F2F2', textColor: 'gray'},
      //   '2023-06-19': {selected: true, color: '#F2F2F2', textColor: 'gray'},
      //   '2023-06-20': {selected: true, color: '#F2F2F2', textColor: 'gray'},
      //   '2023-06-21': {selected: true, color: '#F2F2F2', textColor: 'gray'},
      //   '2023-06-22': {selected: true, color: '#F2F2F2', endingDay: true, textColor: 'gray'}
      // }}
      markedDates={
        type === 'period'
          ? {
              '2023-06-11': {
                selected: true,
                marked: true,
                selectedColor: white,
                selectedTextColor: black,
                dotColor: black,
              },
              '2023-06-12': {
                selected: true,
                marked: true,
                selectedColor: white,
                selectedTextColor: black,
                dotColor: black,
              },
              '2023-06-13': {
                selected: true,
                marked: true,
                selectedColor: white,
                selectedTextColor: black,
                dotColor: black,
              },
              '2023-06-14': {
                selected: true,
                marked: true,
                selectedColor: white,
                selectedTextColor: black,
                dotColor: black,
              },
              '2023-06-15': {
                selected: true,
                marked: true,
                selectedColor: white,
                selectedTextColor: black,
                dotColor: black,
              },
              '2023-06-16': {
                selected: true,
                marked: true,
                selectedColor: white,
                selectedTextColor: black,
                dotColor: black,
              },
            }
          : {
              '2023-09-25': {
                selected: true,
                marked: true,
                selectedColor: white,
                selectedTextColor: black,
                dotColor: black,
              },
            }
      }
    />
  );
}
export function RadioButton({data, onPress, selected, text, style, type}) {
  return (
    <View style={[type == 'gender' ? style : styles.radioButtonContainer]}>
      <TouchableOpacity onPress={onPress} style={[styles.radioButton]}>
        {selected ? <View style={styles.radioButtonIcon} /> : null}
      </TouchableOpacity>
      <Text style={styles.txt}> {text}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  buttonText: {
    textAlign: 'center',
    fontSize: moderateScale(30, 0.1),
    lineHeight: moderateScale(18, 0.1),
    color: white,
  },
  txt: {
    fontSize: moderateScale(10, 0.1),
    lineHeight: moderateScale(17, 0.1),
    color: black,
    paddingLeft: moderateScale(6, 0.1),
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
  },
  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    // justifyContent: 'center',
    height: moderateScale(22, 0.1),
    marginRight: moderateScale(10, 0.1),
  },
  radioButton: {
    height: moderateScale(16, 0.1),
    width: moderateScale(16, 0.1),
    borderRadius: moderateScale(16, 0.1),
    borderWidth: moderateScale(1, 0.1),
    borderColor: black,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D9D9D9',
  },
  radioButtonIcon: {
    height: moderateScale(10, 0.1),
    width: moderateScale(10, 0.1),
    borderRadius: moderateScale(10, 0.1),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: black,
  },
});
