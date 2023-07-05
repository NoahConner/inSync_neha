import {View, Text, ImageBackground, Image, ScrollView} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import s from './style';
import {moderateScale} from 'react-native-size-matters';
import {backgroundColor, linearGradient, screenWidth} from '../../../Constants';
import LinearGradient from 'react-native-linear-gradient';
import {Linear, Calender, RadioButton} from '../../../Components/gradient';
import {AppContext, useAppContext} from '../../../Context/AppContext';
import Button from '../../../Components/Button';
import ModalView from '../../../Components/Modal';
import SVGImg from '../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../assets/images/svg/small-lf.svg';
import SVGImg3 from '../../../assets/images/svg/lob.svg';
import SVGImg1 from '../../../assets/images/svg/round.svg';

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
    // <ImageBackground
    //   style={s.backImg}
    //   source={require('../../../assets/images/home.jpg')}
    //   resizeMode="contain">
    <View
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
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
          top: moderateScale(20, 0.1),
        }}>
        <SVGImg width={80} height={80} />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(60, 0.1),
          left: moderateScale(30, 0.1),
        }}>
        <SVGImg2 width={110} height={110} />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(90, 0.1),
          right: moderateScale(20, 0.1),
        }}>
        <SVGImg3 />
      </View>
      {expected ? (
        <View
          style={{
            position: 'absolute',
            bottom: moderateScale(110, 0.1),
            right: moderateScale(60, 0.1),
          }}>
          <SVGImg3 width={90} height={90} />
        </View>
      ) : null}
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
          <View style={{height: moderateScale(380, 0.1)}}>
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
    </View>
    // </ImageBackground>
  );
};
export default Home;
