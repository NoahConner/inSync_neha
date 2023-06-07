import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import s from './style';
import Input from '../../../Components/input';
import {backgroundColor, black} from '../../../Constants';
const Login = () => {
  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/Login.png')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <View style={s.center}>
        <Text style={s.txt1}>Welcome</Text>
        <Text style={s.txt2}>Glad to see you!</Text>
        <View style={s.input}>
          <Input placeholder={'Email/Username'} type={'text'} />
          <Input placeholder={'Email/Username'} type={'text'} />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
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
export default Login;
