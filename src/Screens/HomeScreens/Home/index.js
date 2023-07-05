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
import SVGImg from '../../../assets/images/svg/icon3.svg';
import SVGImg2 from '../../../assets/images/svg/small-lf.svg';
import SVGImg3 from '../../../assets/images/svg/lob.svg';
import SVGImg1 from '../../../assets/images/svg/round.svg';
import {SafeAreaView} from 'react-native-safe-area-context';
import Entypo from 'react-native-vector-icons/Entypo';

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
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
        position: 'relative',
      }}>
      {/* <View
        style={{
          position: 'absolute',
          left: moderateScale(10, 0.1),
          bottom: moderateScale(15, 0.1),
        }}>
        <SVGImg1 width={130} height={130} />
      </View> */}
      {/* butterfly */}
      <View
        style={{
          position: 'absolute',
          right: moderateScale(20, 0.1),
          top: moderateScale(50, 0.1),
        }}>
        <Image
          style={{
            height: 50,
            width: 50,
          }}
          source={require('../../../assets/images/PNG/butterfly.png')}
        />
      </View>

      {/* left leaf */}
      {/* <View
        style={{
          position: 'absolute',
          top: moderateScale(70, 0.1),
          left: moderateScale(30, 0.1),
        }}>
        <SVGImg2 width={110} height={110} />
      </View> */}

      {/* left leaf */}
      {/* <View
        style={{
          position: 'absolute',
          top: moderateScale(90, 0.1),
          right: moderateScale(20, 0.1),
        }}>
        <SVGImg3 />
<<<<<<< HEAD
      </View>
      {expected ? (
        <View
          style={{
            position: 'absolute',
            bottom: moderateScale(90, 0.1),
            right: moderateScale(60, 0.1),
          }}>
          <SVGImg3 width={80} height={80} />
        </View>
      ) : null}

      <View>
=======

      </View> */}
      {/* <View
        style={{
          position: 'absolute',
          bottom: moderateScale(110, 0.1),
          right: moderateScale(60, 0.1),
        }}>
        <SVGImg3 width={90} height={90} />

      </View> */}
      {/* <View>
>>>>>>> ed3d974a3996f18d265fc95f23a2dd94fb544cec
        <Image
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{...s.center, marginTop: moderateScale(10, 0.1)}}>
          <Text style={s.txt1}>
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
              alignItems: 'flex-start',
              alignSelf: 'flex-end',
              marginTop: moderateScale(-25, 0.1),
            }}>
            {isSelected.map((item, i) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  marginBottom: 5,
                }}>
                <View
                  style={{
                    padding: 3,
                    backgroundColor: item.selected ? '#000' : '#D9D9D9',
                    borderRadius: 2,
                    marginRight: 5,
                    height: 10,
                    width: 10,
                    borderRadius: 100,
                  }}></View>
                <Text
                  style={{
                    color: '#000',
                    fontFamily: 'Rubik-Regular',
                    fontSize: 9,
                  }}>
                  {item.name}
                </Text>
              </View>
            ))}
          </View>
          <View style={{marginBottom: moderateScale(50, 0.1)}}>
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
        </View>
      </ScrollView>
      {/* <View style={s.vector}>
        <Image
          style={{ transform: [{ rotate: '180deg' }] }}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/Vector.png')}
        />
      </View> */}
      {/* <ModalView
        type={'period'}
        visible={modalVisible}
        text={'Reminder'}
        title1={'Your Cycle Is About To Start'}
        title2={'In 2 Days '}
        cancel={() => setModalVisible(!modalVisible)}
      /> */}
    </SafeAreaView>
    // </ImageBackground>
  );
};
export default Home;
