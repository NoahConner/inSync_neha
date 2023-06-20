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
import {screenHeight, screenWidth} from '../../../../Constants';

const Profile = ({navigation}) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);
  const {setToken} = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../../assets/images/profile.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header navigation={navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{
            height: screenHeight,
            width: screenWidth,
          }}>
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
              <Input placeholder={'Relation'} type={'relation'} />

              <View style={s.btn}>
                <Button
                  text={'Save'}
                  onPress={() => {
                    // navigation.navigate('home');
                  }}
                />
              </View>

              <View style={{height: moderateScale(50, 0.1)}}></View>
            </View>
          </View>

          <View style={s.vector}>
            <Image
              style={{transform: [{rotate: '180deg'}]}}
              resizeMode="contain"
              source={require('../../../../assets/images/PNG/Vector.png')}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
export default Profile;
