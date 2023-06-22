import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/AntDesign';
import SVGImg from '../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../assets/images/svg/icon5.svg';
import SVGImg3 from '../../../assets/images/svg/leaf2.svg';
import Header from '../../../Components/Header';
import {black, textColor, backgroundColor} from '../../../Constants';

const NotificationList = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,
  },
];
const ReminderList = [
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,

    editIcon: <Icon1 name="edit" color="black" size={17} />,
    dltIcon: <Icon2 name="delete" color="black" size={18} />,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,

    editIcon: <Icon1 name="edit" color="black" size={17} />,
    dltIcon: <Icon2 name="delete" color="black" size={18} />,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,

    editIcon: <Icon1 name="edit" color="black" size={17} />,
    dltIcon: <Icon2 name="delete" color="black" size={18} />,
  },
  {
    text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the`,

    editIcon: <Icon1 name="edit" color="black" size={17} />,
    dltIcon: <Icon2 name="delete" color="black" size={18} />,
  },
];

const Notification = ({navigation}) => {
  const [notification, setNotification] = useState(true);
  const [reminder, setReminder] = useState(false);
  const renderItem = (item, index) => {
    console.log(item, 'index');
    return (
      <View
        style={
          reminder
            ? {
                flexDirection: 'row',
                justifyContent: 'space-evenly',
                alignItems: 'center',
                backgroundColor: '#EDEDED',
                paddingHorizontal: moderateScale(5, 0.1),
                marginVertical: moderateScale(5, 0.1),
              }
            : {
                backgroundColor: item.index < 2 ? '#343434' : '#EDEDED',

                // flex: 1,
                marginVertical: moderateScale(5, 0.1),
              }
        }>
        <View style={reminder ? {flex: 0.8} : null}>
          <Text
            style={{
              alignItems: 'center',
              paddingHorizontal: moderateScale(30, 0.1),
              paddingVertical: moderateScale(10, 0.1),
              fontSize: moderateScale(9, 0.1),
              lineHeight: moderateScale(11, 0.1),
              color: reminder ? textColor : item.index < 2 ? '#FFFFFF' : black,
              fontFamily: 'Rubik-Regular',
            }}>
            {item.item.text}{' '}
          </Text>
        </View>
        {reminder ? (
          <View
            style={{
              flex: 0.2,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              paddingRight: moderateScale(12, 0.1),
            }}>
            {reminder ? <>{item.item.editIcon}</> : null}
            <View style={{paddingRight: moderateScale(5, 0.1)}}>
              {reminder ? <>{item.item.dltIcon}</> : null}
            </View>
          </View>
        ) : null}
      </View>
    );
  };
  return (
    
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        position: 'relative',
        // paddingHorizontal: moderateScale(30, 0.1),
      }}>
      {/* corner blob */}
      <View style={{position: 'absolute', top: 0, left: 0}}>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>

      {/* butterfly */}
      <View
        style={{
          position: 'absolute',
          right: moderateScale(20, 0.1),
          top: moderateScale(40, 0.1),
        }}>
        <SVGImg width={80} height={80} />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(90, 0.1),
          left: -30,
        }}>
        <SVGImg2 />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(180, 0.1),
          right: 0,
        }}>
        <SVGImg3 />
      </View>

      <View
        style={{
          paddingTop: moderateScale(60, 0.1),
          paddingHorizontal: moderateScale(30, 0.1),
        }}>
        <Header navigation={navigation} />
      </View>
      <ScrollView >
        <View style={s.center}>
          <View
            style={{
              paddingHorizontal: moderateScale(30, 0.1),
            }}>
            <Text style={s.txt1}>Notifications & Reminders</Text>
          </View>
          <View style={{justifyContent: 'flex-end', alignItems: 'flex-end'}}>
            {reminder ? (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  marginVertical: moderateScale(25, 0.1),
                  marginBottom: moderateScale(-30, 0.1),
                  alignItems: 'center',
                  paddingHorizontal: moderateScale(20, 0.1),
                }}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('reminder')}>
                  <Icon name="md-add" color="black" size={25} />
                </TouchableOpacity>
                <Text
                  style={{
                    color: black,
                    fontSize: moderateScale(14, 0.1),
                    lineHeight: moderateScale(15, 0.1),
                    textAlign: 'center',
                    fontWeight: '900',
                    fontFamily: 'Rubik-Regular',
                  }}>
                  Add Reminder
                </Text>
              </View>
            ) : null}
          </View>

          <View style={s.container}>
            <TouchableOpacity
              style={notification ? s.viewT : null}
              onPress={() => {
                setNotification(true);
                setReminder(false);
              }}>
              <Text
                style={[
                  s.txt,
                  notification ? {fontWeight: '400'} : {fontWeight: '800'},
                ]}>
                Notifications
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={reminder ? s.viewT : null}
              onPress={() => {
                setReminder(true);
                setNotification(false);
              }}>
              <Text
                style={[
                  s.txt,
                  reminder ? {fontWeight: '400'} : {fontWeight: '800'},
                ]}>
                Reminder
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <FlatList
              data={reminder == true ? ReminderList : NotificationList}
              renderItem={renderItem}
            />
          </View>
        </View>
      </ScrollView>

      <View style={s.vector}>
        <Image
          style={{transform: [{rotate: '180deg'}]}}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
    </View>
  );
};

export default Notification;
