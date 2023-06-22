import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useContext} from 'react';
import s from './style';
import Input from '../../../../Components/input';
import Button from '../../../../Components/Button';
import Header from '../../../../Components/Header';
import {AppContext} from '../../../../Context/AppContext';

import {moderateScale} from 'react-native-size-matters';
import styles from './style';
import {backgroundColor, black} from '../../../../Constants';
import SVGImg from '../../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../../assets/images/svg/icon5.svg';
import SVGImg3 from '../../../../assets/images/svg/leaf2.svg';

const Profile = ({navigation}) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);
  const {setToken} = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          backgroundColor: backgroundColor,
          flex: 1,
          position: 'relative',
          paddingHorizontal: moderateScale(30, 0.1),
        }}>
        {/* corner blob */}
        <View style={{position: 'absolute', top: 0, left: 0}}>
          <Image
            resizeMode="contain"
            source={require('../../../../assets/images/PNG/Vector.png')}
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
          }}>
          <Header navigation={navigation} />
        </View>
        <ScrollView style={{marginBottom: moderateScale(50, 0.1)}}>
          <View style={s.center}>
            <Text style={s.txt1}>Edit Profile</Text>
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                source={require('../../../../assets/images/PNG/img.png')}
              />
              <Text style={styles.name}>Laura Jenner</Text>
            </View>
            <View style={s.input}>
              <Input
                placeholder={'First Name'}
                type={'text'}
                value={name}
                setValue={v => setName(v)}
              />
              <Input
                placeholder={'Last Name'}
                type={'text'}
                value={last}
                setValue={v => setLast(v)}
              />
              <Input placeholder={'DOB'} type={'DOB'} />
              <Input
                placeholder={'Cycle Duration'}
                type={'number'}
                maxLength={2}
              />
              <Input placeholder={'Expected Date'} type={'expected date'} />
              <Input
                placeholder={'Period Duration'}
                type={'number'}
                maxLength={2}
              />

              <View style={s.btn}>
                <Button
                  text={'Save'}
                  onPress={() => {
                    // navigation.navigate('home');
                  }}
                />
              </View>

              {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
            </View>
            <View style={{}}>
              <View
                style={{
                  marginVertical: moderateScale(-50, 0.1),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  style={{width: moderateScale(280, 0.1)}}
                  source={require('../../../../assets/images/profile-btm.jpg')}
                />
              </View>
            </View>

            {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
          </View>
        </ScrollView>

        <View style={s.vector}>
          <Image
            style={{transform: [{rotate: '180deg'}]}}
            resizeMode="contain"
            source={require('../../../../assets/images/PNG/Vector.png')}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Profile;
