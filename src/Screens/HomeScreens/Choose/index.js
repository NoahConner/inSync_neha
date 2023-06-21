import {View, Text, ImageBackground, Image} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';

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
          <TouchableOpacity style={s.box}>
            <Icon3 name="face-woman-outline" color="black" size={50} />
            <Text style={s.Ttxt}>Mother</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.box}>
            <Icon3 name="face-woman-outline" color="black" size={50} />
            <Text style={s.Ttxt}>Sister</Text>
          </TouchableOpacity>
          <TouchableOpacity style={s.box}>
            <Icon3 name="face-woman-outline" color="black" size={50} />
            <Text style={s.Ttxt}>Wife</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('form')}
            style={s.box}>
            <Icon4 name="md-add" color="#D8D5D5" size={55} />
            {/* <Text style={{color: 'gray'}}>other</Text> */}
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
