import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import React, { useState } from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import { moderateScale } from 'react-native-size-matters';
import Header from '../../../Components/Header';
import SVGImg from '../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../assets/images/svg/small-lf.svg';
import SVGImg3 from '../../../assets/images/svg/lob.svg';
import SVGImg1 from '../../../assets/images/svg/round.svg';
import { backgroundColor } from '../../../Constants';

const Reset = ({ navigation }) => {
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);

  return (
    // <ImageBackground
    //   style={s.backImg}
    //   source={require('../../../assets/images/change.jpg')}
    //   resizeMode="contain">
    //   <View>
    //     <Image
    //       resizeMode="contain"
    //       source={require('../../../assets/images/PNG/Vector.png')}
    //     />
    //   </View>
    //   <Header navigation={navigation} />
    //   <View style={s.center}>
    //     <Text style={s.txt1}>Change Password</Text>

    //     <View style={s.input}>
    //       <Input
    //         placeholder={'Old Password'}
    //         type={'password'}
    //         setValue={setPassword}
    //       />
    //       <Input
    //         placeholder={'New Password'}
    //         type={'password'}
    //         setValue={setPassword}
    //       />
    //       <Input
    //         placeholder={'Confirm New Password'}
    //         type={'Confirm password'}
    //         setValue={setConfPass}
    //       />

    //       <View style={s.btn}>
    //         <Button text={'Update'} />
    //       </View>
    //     </View>
    //   </View>

    //   <View
    //     style={{

    //       position: 'absolute',
    //       bottom: 0,
    //       right: 0
    //     }}>

    //     <Image
    //       style={{ transform: [{ rotate: '180deg' }] }}
    //       resizeMode="contain"
    //       source={require('../../../assets/images/PNG/Vector.png')}
    //     />

    //   </View>
    // </ImageBackground>
     <View style={{
      flex:1, backgroundColor: backgroundColor
    }}>

<View
        style={{
          position: 'absolute',
          left: moderateScale(10, 0.1),
          bottom: moderateScale(15, 0.1),
        }}>
        <SVGImg1 width={130} height={130} />
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
          top: moderateScale(70, 0.1),
          left: moderateScale(50, 0.1),
        }}>
        <SVGImg2 width={110} height={110} />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(90, 0.1),
          right: moderateScale(20,0.1),
        }}>
        <SVGImg3 />
        
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: moderateScale(110, 0.1),
          right: moderateScale(60,0.1),
        }}>
        <SVGImg3 width={90} height={90} />
        
      </View>
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <View
          style={{
            paddingTop: moderateScale(60, 0.1),
          }}>
          <Header navigation={navigation} />
        </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.center}>
          <Text style={s.txt1}>
          Change Password
          </Text>
         

          <View style={s.input}>
          <Input
            placeholder={'Old Password'}
            type={'password'}
            setValue={setPassword}
          />
          <Input
            placeholder={'New Password'}
            type={'password'}
            setValue={setPassword}
          />
          <Input
            placeholder={'Confirm New Password'}
            type={'Confirm password'}
            setValue={setConfPass}
          />

          <View style={s.btn}>
            <Button text={'Update'} />
          </View>
        </View>
        
          {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
        </View>
      
      </ScrollView>
      <View style={s.vector}>
          <Image
            style={{transform: [{rotate: '180deg'}]}}
            resizeMode="contain"
            source={require('../../../assets/images/PNG/Vector.png')}
          />
        </View>
     
      </View>
  );
};
export default Reset;
