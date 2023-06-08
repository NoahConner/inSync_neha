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
import SocialLogin from '../../../Components/socialLogin';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../Components/Header';

const SignUp = ({navigation}) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);

  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/SignUp.png')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header navigation={navigation} />
      <View style={s.center}>
        <Text style={s.txt1}>Create Account!</Text>
        <Text style={s.txt2}>To get started now</Text>
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
          <Input
            placeholder={'Email'}
            type={'email'}
            setValue={v => setEmail(v)}
            value={email}
          />
          <Input
            placeholder={'Password'}
            type={'password'}
            value={password}
            setValue={setPassword}
          />
          <Input
            placeholder={'Confirm Password'}
            type={'Confirm password'}
            value={confPassword}
            setValue={setConfPass}
          />

          <View style={s.btn}>
            <Button text={'Create Now'} />
          </View>

          <View style={s.vector}>
            <Image source={require('../../../assets/images/PNG/line.png')} />
            <Text style={s.txt3}> Or Sign UP With </Text>
            <Image source={require('../../../assets/images/PNG/line.png')} />
          </View>
          <View style={s.SLogin}>
            <SocialLogin
              source={require('../../../assets/images/PNG/google.png')}
            />
            <SocialLogin
              source={require('../../../assets/images/PNG/fb.png')}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={s.link}>
        <Text style={s.Ftxt}>Already have an account?</Text>
        <Text style={[s.Ftxt, {fontWeight: 'bold'}]}> Login</Text>
      </TouchableOpacity>
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
export default SignUp;
