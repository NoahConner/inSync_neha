import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState, useContext} from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import SocialLogin from '../../../Components/socialLogin';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../Components/Header';
import {AppContext} from '../../../Context/AppContext';
import {screenHeight, screenWidth} from '../../../Constants';

const SignUp = ({navigation}) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);
  const [dob, setDob] = useState(null);
  const signUp = () => {
    navigation.navigate('form');
  };
  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/signup.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header navigation={navigation} />
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          style={{
            flex: 1,
            width: screenWidth,
            height: screenHeight,
          }}>
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
                <Button text={'Create Now'} onPress={signUp} />
              </View>

              <View style={s.vector1}>
                <Image
                  source={require('../../../assets/images/PNG/line.png')}
                />
                <Text style={s.txt3}> Or Sign UP With </Text>
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
            onPress={() => navigation.navigate('Login')}
            style={s.link}>
            <Text style={s.Ftxt}>Already have an account?</Text>
            <Text style={[s.Ftxt, {fontWeight: 'bold'}]}> Login</Text>
          </TouchableOpacity>
          <View style={s.vector}>
            <Image
              style={{transform: [{rotate: '180deg'}]}}
              resizeMode="contain"
              source={require('../../../assets/images/PNG/Vector.png')}
            />
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </ImageBackground>
  );
};
export default SignUp;
