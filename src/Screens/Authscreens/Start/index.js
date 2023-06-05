import React from 'react';
import {View, Text, Image} from 'react-native';
import CutomButton from '../../../Components/Button';
import {backgroundColor} from '../../../Constants';
import s from './style';

const StartScreen = () => {
  return (
    <View style={s.container}>
      {/* <Image
        source={require('../../../assets/images/PNG/')}
        /> */}
      <CutomButton text="Send" />
    </View>
  );
};
export default StartScreen;
