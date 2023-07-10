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
import {RadioButton} from '../../../Components/gradient';
import {screenHeight, screenWidth} from '../../../Constants';

const SignUp = ({navigation}) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);
  const [dob, setDob] = useState(null);
  const [isSelected, setIsSelected] = useState([
    {
      id: 1,
      name: 'Male',
      selected: true,
    },
    {
      id: 2,
      name: 'Female',
      selected: false,
    },
  ]);

  const onRadioBtnClick = item => {
    let updatedState = isSelected.map(isSelectedItem =>
      isSelectedItem.name === item.name
        ? {...isSelectedItem, selected: true}
        : {...isSelectedItem, selected: false},
    );

    setIsSelected(updatedState);
  };
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
        <ScrollView>
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
              <View
                style={{
                  flexDirection: 'row',
                  paddingHorizontal: moderateScale(15, 0.1),
                  paddingVertical: moderateScale(7, 0.1),

                  // justifyContent: 'flex-end',
                  // alignItems: 'flex-end',
                  // marginTop: moderateScale(-25, 0.1),
                }}>
                {isSelected.map((item, i) => (
                  <View style={s.radio} key={i}>
                    <RadioButton
                      onPress={() => {
                        onRadioBtnClick(item);
                        console.log('item', item);
                      }}
                      type={'gender'}
                      style={{
                        flexDirection: 'row',
                        height: moderateScale(22, 0.1),
                        marginRight: moderateScale(20, 0.1),
                      }}
                      selected={item.selected}
                      key={item.id}
                      text={item.name}></RadioButton>
                  </View>
                ))}
              </View>

              <View style={s.btn}>
                <Button text={'Create Now'} onPress={signUp} />
              </View>

              <View style={s.vector1}>
                <Image
                  source={require('../../../assets/images/PNG/line.png')}
                />
                <Text style={s.txt3}> Or Sign up with </Text>
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
        </ScrollView>
      </TouchableWithoutFeedback>
      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={s.link}>
        <Text style={s.Ftxt}>Already have an account?</Text>
        <Text style={[s.Ftxt, {fontFamily: 'Rubik-ExtraBold'}]}> Login</Text>
      </TouchableOpacity>
      <View style={s.vector}>
        <Image
          style={{transform: [{rotate: '180deg'}]}}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
    </ImageBackground>
  );
};
export default SignUp;
