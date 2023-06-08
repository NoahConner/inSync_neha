import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../Components/Header';

const Reset = ({navigation}) => {
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);

  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/change.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header />
      <View style={s.center}>
        <Text style={s.txt1}>Change Password</Text>

        <View style={s.input}>
          <Input
            placeholder={'Old Password'}
            type={'password'}
            setValue={setPassword}
          />
          <Input
            placeholder={'New Password'}
            type={'password'}
            setValue={setPassword}
          />
          <Input
            placeholder={'Confirm New Password'}
            type={'Confirm password'}
            setValue={setConfPass}
          />

          <View style={s.btn}>
            <Button text={'Update'} />
          </View>
        </View>
      </View>

      <View style={s.vector}>
        <View
          style={{
            flex: 1,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            bottom: 0,
          }}>
          <Image
            style={{transform: [{rotate: '180deg'}]}}
            resizeMode="contain"
            source={require('../../../assets/images/PNG/Vector.png')}
          />
        </View>
      </View>
    </ImageBackground>
  );
};
export default Reset;
