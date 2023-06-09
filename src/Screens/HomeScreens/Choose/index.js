import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import Icon1 from 'react-native-vector-icons/Foundation';
import Icon2 from 'react-native-vector-icons/Fontisto';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Choose = ({navigation}) => {
  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/choose.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <View style={s.center}>
        <Text style={s.txt1}>Choose your</Text>
        <Text style={s.txt1}>Relation</Text>
        <View style={s.view1}>
          <TouchableOpacity
            style={s.box}
            onPress={() => navigation.navigate('form')}>
            <Icon1 name="torso-female" size={57} />
            <Text>Mother</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.box}>
            <Icon2 name="female" size={50} />
            <Text>Sister</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.box}>
            <Icon3 name="user-female" size={50} />
            <Text>Wife</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.box}>
            <Icon4 name="md-add" size={50} />
            <Text>other</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={s.vector}>
        <Image
          style={{transform: [{rotate: '180deg'}]}}
          // resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
    </ImageBackground>
  );
};
export default Choose;
