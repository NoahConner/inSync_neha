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
    <View style={{
      flex: 1, backgroundColor: backgroundColor,
      position: 'relative',
      paddingTop:moderateScale(40)
      // paddingBottom:0
    }}>

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
          top: moderateScale(90, 0.1),
          left: moderateScale(45, 0.1),
        }}>
        <Image
          style={{
            height: 120,
            width: 90
          }}
          source={require('../../../assets/images/PNG/backflower.png')}
        />
      </View>

      {/* left leaf */}
      <View
        style={{
          position: 'absolute',
          top: moderateScale(130, 0.1),
          right: moderateScale(5, 0.1),
        }}>
        <Image
          style={{
            height: 40,
            width: 40
          }}
          source={require('../../../assets/images/PNG/circleDot.png')}
        />

      </View>
      <View
        style={{
          position: 'absolute',
          top: moderateScale(210, 0),
          right: moderateScale(0, 0.1),
        }}>
        <Image
          style={{
            height: 99,
            width: 92
          }}
          source={require('../../../assets/images/PNG/downflower.png')}
        />

      </View>
      <View style={{ position: 'absolute', top: -38, left: 0, opacity: 0.7 }}>
        <Image
          style={{ width: 99 }}
          resizeMode="contain"
          source={require('../../../assets/images/PNG/upborder.png')}
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
              marginTop: moderateScale(0, 0.1),
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
          <View style={{ marginBottom: moderateScale(50, 0.1), }}>
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
        <View
          style={{
            zIndex: -1,
            left: moderateScale(10, 0.1),
            top: moderateScale(-85, 0)
          }}>
          <SVGImg1 width={130} height={130} />
        </View>

        <View style={{ position: 'absolute', right: 0, height: 35, width: 100, bottom: 0 }}>
          <Image
            style={{ width: '100%', zIndex: -10, opacity: 0.7, height: '100%', }}
            resizeMode="contain"
            source={require('../../../assets/images/PNG/downborder.png')}
          />
        </View>
      </ScrollView>

      {/* <View style={{   flex: 1, zIndex: 11, position: 'absolute', bottom: 0, right: 0 }}>
        <View style={{ width: 99, height: 0, backgroundColor:'green',justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Image
            style={{
              width: 99,
              tintColor: '#595959', opacity: 9.5,
              top: moderateScale(43)
            }}
            resizeMode="contain"
            source={require('../../../assets/images/PNG/downborder.png')}
          />
        </View>
      </View> */}



      {/* <ModalView
        type={'period'}
        visible={modalVisible}
        text={'Reminder'}
        title1={'Your Cycle Is About To Start'}
        title2={'In 2 Days '}
        cancel={() => setModalVisible(!modalVisible)}
      /> */}
    </View>
    // </ImageBackground>
  );
};
export default Home;
