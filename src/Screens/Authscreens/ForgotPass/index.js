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

const Forgot = ({navigation}) => {
  const [email, setEmail] = useState(null);

  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/forgot.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <View
        style={{
          paddingTop: moderateScale(10, 0.1),
          paddingHorizontal: moderateScale(20, 0.1),
        }}>
        <Header navigation={navigation} />
      </View>
      <View style={s.center}>
        <Text style={s.txt1}>Forget Password</Text>

        <View style={s.input}>
          <Input placeholder={'Email'} type={'text'} setValue={setEmail} />

          <View style={s.btn}>
            <Button
              text={'Send'}
              onPress={() => navigation.navigate('reset')}
            />
          </View>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate('SignUp')}
        style={s.link}>
        <Text style={s.Ftxt}>Don’t have an account?</Text>
        <Text style={[s.Ftxt, {fontFamily: 'Rubik-ExtraBold'}]}>
          {' '}
          Sign Up Now
        </Text>
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
export default Forgot;
