import {
  View,
  Text,
  ImageBackground,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from 'react-native';
import React, {useState, useContext} from 'react';
import s from './style';
import Input from '../../../Components/input';
import Button from '../../../Components/Button';
import Header from '../../../Components/Header';
import {AppContext, useAppContext} from '../../../Context/AppContext';
import ModalView from '../../../Components/Modal';
import {
  backgroundColor,
  black,
  screenHeight,
  screenWidth,
} from '../../../Constants';
import {moderateScale} from 'react-native-size-matters';
import styles from './style';

const Form = ({navigation}) => {
  const [name, setName] = useState(null);
  const [last, setLast] = useState(null);
  const [password, setPassword] = useState(null);
  const [confPassword, setConfPass] = useState(null);
  const {setToken} = useAppContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView>
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
              <Input
                placeholder={'Cycle Duration'}
                type={'number'}
                maxLength={2}
              />
              <Input placeholder={'Expected Date'} type={'expected date'} />
              <Input
                placeholder={'Period Duration'}
                type={'number'}
                maxLength={2}
              />
              <Input
                placeholder={'Relation'}
                type={'relation'}
                style={
                  {
                    // justifyContent: 'flex-start',
                    // paddingHorizontal: moderateScale(18, 0.1),
                    // backgroundColor: '#D9D9D9',
                  }
                }
              />

              <View style={s.btn}>
                <Button
                  text={'Submit'}
                  onPress={() => {
                    setToken('sdsk');
                    // navigation.navigate('home');
                  }}
                />
              </View>
              <View>
                <Text
                  style={[
                    styles.txt1,
                    {
                      fontSize: moderateScale(15, 0.1),
                    },
                  ]}>
                  ---------OR--------
                </Text>
              </View>
              <View style={s.btn}>
                <Button
                  text={'Sync with Partner'}
                  onPress={() => {
                    setModalVisible(true);
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
        </ScrollView>
      </TouchableWithoutFeedback>

      <ModalView
        visible={modalVisible}
        type={'sync'}
        text={`Get Sync With`}
        text2={'Your Partner'}
        close={() => setModalVisible(!modalVisible)}
        cancel={() => setModalVisible(!modalVisible)}
      />
    </ImageBackground>
  );
};
export default Form;
