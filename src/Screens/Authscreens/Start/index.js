import React from 'react';
import {View, Text, Image} from 'react-native';
import {Button} from '../../../Components/Button';
import {backgroundColor} from '../../../Constants';
import s from './style';

const StartScreen = () => {
  return (
    <View style={s.container}>
      <Image source={require('../../../assets/images/PNG/i13.png')} />
      {/* <Button text="Send" onPress={console.log('abc')} /> */}
    </View>
  );
};
export default StartScreen;
