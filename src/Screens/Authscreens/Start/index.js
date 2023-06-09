import React from 'react';
import {View, Text, Image, ImageBackground, StatusBar} from 'react-native';
import CutomButton from '../../../Components/Button';
import {backgroundColor, screenHeight, screenWidth} from '../../../Constants';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import img from '../../../assets/images/backImg.jpg';

const StartScreen = ({navigation}) => {
  return (
    <ImageBackground style={s.backImg} source={img} resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <View style={s.arrow}>
        <Image
          style={s.arrImg}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/i14.png')}
        />
      </View>
      <View style={s.center}>
        <View>
          <Image
            style={s.logo}
            // resizeMode="contain"
            source={require('../../../assets/images/PNG/i10.png')}
          />
        </View>
        <View>
          <Image
            style={s.text}
            // resizeMode="contain"
            source={require('../../../assets/images/PNG/logo.png')}
          />
        </View>
        <View style={s.btn}>
          <View style={{paddingVertical: 15}}>
            <CutomButton
              text="Login"
              onPress={() => navigation.navigate('Login')}
            />
          </View>
          <View>
            <CutomButton
              text="Sign Up"
              onPress={() => navigation.navigate('SignUp')}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          flex: 1,
          position: 'absolute',
          bottom: 0,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View
          style={{alignItems: 'flex-start', transform: [{rotate: '180deg'}]}}>
          <Image
            style={{height: 120, width: 60}}
            source={require('../../../assets/images/PNG/i14.png')}
          />
        </View>
        <View style={s.vector}>
          <Image
            style={{transform: [{rotate: '180deg'}]}}
            resizeMode="contain"
            source={require('../../../assets/images/PNG/Vector.png')}
          />
        </View>
      </View>
    </ImageBackground>
    // <View style={s.container}>

    //   {/* <StatusBar hidden /> */}
    //   {/* <ImageBackground
    //     style={{
    //       flex: 1,
    //       width: '100%',
    //       height: '100%',
    //       top: 0,
    //       left: 0,
    //       right: 0,
    //       // paddingBottom: 15,
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //       bottom: 0,
    //       // position: 'absolute',
    //     }}
    //     resizeMode="cover"
    //     source={img}>
    //     <View style={s.btn}>
    //       <View style={{paddingVertical: 15}}>
    //         <CutomButton text="Login" />
    //       </View>
    //       <View>
    //         <CutomButton text="Sign Up" />
    //       </View>
    //     </View>
    //   </ImageBackground> */}
    //   {/* <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-evenly',
    //       marginTop: 18,
    //     }}>
    //     <View>
    //       <Image
    //         style={{width: 165, height: 150}}
    //         source={require('../../../assets/images/PNG/i13.png')}
    //       />
    //     </View>
    //     <View style={{top: 58}}>
    //       <Image source={require('../../../assets/images/PNG/i1.png')} />
    //     </View>
    //     <View>
    //       <Image source={require('../../../assets/images/PNG/i4.png')} />
    //     </View>
    //     <View style={{marginTop: moderateScale(-35, 0.1)}}>
    //       <Image
    //         style={{height: moderateScale(200, 0.1)}}
    //         source={require('../../../assets/images/PNG/i14.png')}
    //       />
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-around',
    //       paddingHorizontal: moderateScale(18, 0.1),
    //       left: moderateScale(50),
    //     }}>
    //     <View
    //       style={{
    //         transform: [{rotate: '-73.14deg'}],
    //       }}>
    //       <Image source={require('../../../assets/images/PNG/i4.png')} />
    //     </View>
    //     <View
    //       style={
    //         {
    //           // marginHorizontal: moderateScale(10),
    //         }
    //       }>
    //       <Image source={require('../../../assets/images/PNG/i9.png')} />
    //     </View>
    //     <View style={{marginTop: moderateScale(-20, 0.1)}}>
    //       <Image source={require('../../../assets/images/PNG/i7.png')} />
    //     </View>
    //   </View> */}
    // </View>
  );
};
export default StartScreen;
