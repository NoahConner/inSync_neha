import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import SocialLogin from '../../../Components/socialLogin';
import {moderateScale} from 'react-native-size-matters';
import {screenHeight} from '../../../Constants';

const Login = ({navigation}) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : screenHeight}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
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
              <Input
                placeholder={'Email'}
                type={'text'}
                setValue={v => setEmail(v)}
                value={email}
              />
              <Input
                placeholder={'Password'}
                type={'password'}
                setValue={v => setPassword(v)}
                value={password}
              />
              <TouchableOpacity
                onPress={() => navigation.navigate('Forgot')}
                style={s.fTxt}>
                <Text style={s.Ftxt}>Forgot Password ?</Text>
              </TouchableOpacity>
              <View style={s.btn}>
                <Button text={'Login'} />
              </View>
              <View style={s.vector1}>
                <Image
                  source={require('../../../assets/images/PNG/line.png')}
                />
                <Text style={s.txt3}> or Login With </Text>
                <Image
                  source={require('../../../assets/images/PNG/line.png')}
                />
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
            onPress={() => navigation.navigate('SignUp')}
            style={s.link}>
            <Text style={s.Ftxt}>Don’t have an account?</Text>
            <Text style={[s.Ftxt, {fontWeight: 'bold'}]}> Sign Up Now</Text>
          </TouchableOpacity>
          <View style={s.vector}>
            <Image
              style={{transform: [{rotate: '180deg'}]}}
              resizeMode="contain"
              source={require('../../../assets/images/PNG/Vector.png')}
            />
          </View>
        </ImageBackground>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
export default Login;
