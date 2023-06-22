import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import {linearGradient, screenWidth} from '../../../Constants';
import LinearGradient from 'react-native-linear-gradient';
import {Linear, Calender, RadioButton} from '../../../Components/gradient';
import {AppContext, useAppContext} from '../../../Context/AppContext';
import Button from '../../../Components/Button';
import ModalView from '../../../Components/Modal';

const Home = ({navigation}) => {
  const {setExpected, setPeriod, period, expected} = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);

  const [isSelected, setIsSelected] = useState([
    {
      id: 1,
      name: 'Period',
      selected: true,
    },
    {
      id: 2,
      name: 'Expected Period',
      selected: false,
    },
  ]);

  const onRadioBtnClick = item => {
    let updatedState = isSelected.map(isSelectedItem =>
      isSelectedItem.name === item.name
        ? {...isSelectedItem, selected: true}
        : {...isSelectedItem, selected: false},
    );

    setIsSelected(updatedState);
  };
  useEffect(() => {
    setTimeout(() => {
      setModalVisible(true);
    }, 2000);
    setPeriod(true);
  }, []);
  useEffect(() => {
    if (expected == true) {
      console.log('ssssss', expected);

      onRadioBtnClick({
        id: 2,
        name: 'Expected Period',
        selected: false,
      });
    } else {
      onRadioBtnClick({
        id: 1,
        name: 'Period',
        selected: true,
      });
    }
  }, [expected]);

  return (
    <ImageBackground
      style={s.backImg}
      source={require('../../../assets/images/home.jpg')}
      resizeMode="contain">
      <View>
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={s.center}>
          <Text style={s.txt1}>
            {' '}
            {expected ? 'Expected Days' : 'Period Cycle'}{' '}
          </Text>
          <Linear
            type={'text'}
            text1={expected ? '65' : '02'}
            text2={'Days To Go'}
            text3={expected ? ' for Delivery' : 'For your next period'}
          />
          {period ? <Calender type={'period'} /> : <Calender />}

          <View
            style={{
              // width: 120,
              alignItems: 'flex-start',
              alignSelf: 'flex-end',
              marginTop: moderateScale(-25, 0.1),
            }}>
            {isSelected.map((item, i) => (
              <View style={[s.radio]} key={i}>
                <RadioButton
                  // onPress={() => {
                  //   onRadioBtnClick(item);
                  //   console.log('item', item);
                  // }}
                  selected={item.selected}
                  key={item.id}
                  text={item.name}></RadioButton>
              </View>
            ))}
          </View>
          <View style={{height: moderateScale(380,0.1)}}>
          {!expected ? (
            <Linear type={'graph'} />
          ) : (
            <View style={s.btn}>
              <Button
                text={'Resume Your Cycle'}
                onPress={() => setExpected(false)}
              />
            </View>
          )}
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
      <ModalView
        type={'period'}
        visible={modalVisible}
        text={'Reminder'}
        title1={'Your Cycle Is About To Start'}
        title2={'In 2 Days '}
        cancel={() => setModalVisible(!modalVisible)}
      />
    </ImageBackground>
  );
};
export default Home;
