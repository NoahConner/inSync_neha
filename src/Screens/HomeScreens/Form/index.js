import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import SocialLogin from '../../../Components/socialLogin';
import {moderateScale} from 'react-native-size-matters';
import Header from '../../../Components/Header';
import {AppContext} from '../../../Context/AppContext';

const Form = ({navigation}) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);
  const context = useContext(AppContext);

  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/form.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <Header navigation={navigation} />
      <View style={s.center}>
        <Text style={s.txt1}>Detailed Form</Text>
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
          <Input placeholder={'Cycle Duration'} type={'cycle'} />
          <Input placeholder={'Expected Date'} type={'expected date'} />
          <Input placeholder={'Period Duration'} type={'period duration'} />
          <Input placeholder={'Relation'} type={'relation'} />

          <View style={s.btn}>
            <Button
              text={'Submit'}
              onPress={() => {
                context.setToken('abc');
                navigation.navigate('home');
              }}
            />
          </View>
        </View>
      </View>

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
export default Form;
