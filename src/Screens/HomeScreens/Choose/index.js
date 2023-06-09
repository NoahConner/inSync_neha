import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState} from 'react';
import s from './style';
import Icon3 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon4 from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {moderateScale} from 'react-native-size-matters';
import SVGImg from '../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../assets/images/svg/small-lf.svg';
import SVGImg3 from '../../../assets/images/svg/lob.svg';
import SVGImg1 from '../../../assets/images/svg/round.svg';
import {backgroundColor} from '../../../Constants';
import Header from '../../../Components/Header';
const Choose = ({navigation}) => {
  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
        position: 'relative',
        paddingHorizontal: moderateScale(30, 0.1),
      }}>
      {/* corner blob */}

      <View style={{position: 'absolute', top: -38, left: 0 , opacity:0.7}}>
        <Image
        style={{width:99}}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/upborder.png')}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          left: moderateScale(18, 0.1),
          top: moderateScale(50, 0.1),
        }}>
        <SVGImg1 width={120} height={120} />
      </View>
      {/* butterfly */}
      <View
        style={{
          position: 'absolute',
          right: moderateScale(15, 0.1),
          top: moderateScale(30, 0.1),
        }}>
        <SVGImg width={80} height={80} />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(50, 0.1),
          right: moderateScale(140, 0.1),
        }}>
        <SVGImg2 />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(110, 0.1),
          right: 25,
        }}>
        <SVGImg3 />
      </View>
      <View
        style={{
          paddingTop: moderateScale(60, 0.1),
        }}>
        <View style={{height: moderateScale(50, 0.1)}}></View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.center}>
          <View
            style={{
              width: '60%',
              alignSelf: 'center',
            }}>
            <Text style={s.txt1}>Choose your Relation</Text>
          </View>
          <View style={s.view1}>
            <TouchableOpacity style={s.box}>
              <Image
                source={require('../../../assets/images/PNG/user-f.png')}
                style={s.imgIcon}
              />
              <Text style={s.Ttxt}>Mother</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.box}>
              <Image
                source={require('../../../assets/images/PNG/user-f.png')}
                style={s.imgIcon}
              />
              <Text style={s.Ttxt}>Sister</Text>
            </TouchableOpacity>
            <TouchableOpacity style={s.box}>
              <Image
                source={require('../../../assets/images/PNG/user-f.png')}
                style={s.imgIcon}
              />
              <Text style={s.Ttxt}>Wife</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('form')}
              style={s.box}>
              <Icon4 name="md-add" color="#D8D5D5" size={55} />
              {/* <Text style={{color: 'gray'}}>other</Text> */}
            </TouchableOpacity>
          </View>
          <View style={{}}>
            <View
              style={{
                height: moderateScale(300, 0.1),
                justifyContent: 'center',
                alignItems: 'center',
                overflow: 'hidden',
              }}>
              <Image
                resizeMode="contain"
                style={{width: moderateScale(300, 0.1)}}
                source={require('../../../assets/images/choose-btm.jpg')}
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={s.vector}>
        <Image
          style={{width:99 , top:45 , opacity:0.7}}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/downborder.png')}
        />
      </View>
    </View>
  );
};
export default Choose;
