import {
  View,
  Text,
  ImageBackground,
  Image,
  ScrollView,
  Keyboard,
  TextInput,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {useState, useContext, useRef} from 'react';
import s from './style';
import RBSheet from 'react-native-raw-bottom-sheet';
import Input from '../../../../Components/input';
import Button from '../../../../Components/Button';
import Header from '../../../../Components/Header';
import {AppContext} from '../../../../Context/AppContext';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {moderateScale} from 'react-native-size-matters';
import moment from 'moment';
import styles from './style';
import {backgroundColor, black} from '../../../../Constants';
import SVGImg from '../../../../assets/images/svg/icon4.svg';
import SVGImg2 from '../../../../assets/images/svg/icon5.svg';
import SVGImg3 from '../../../../assets/images/svg/leaf2.svg';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Entypo from 'react-native-vector-icons/Entypo';
import {
  launchCamera,
  launchImageLibrary,
  showImagePicker,
} from 'react-native-image-picker';
const Profile = ({navigation}) => {
  const refRBSheet = useRef();
  const [name, setName] = useState('Laura');
  const [last, setLast] = useState('Jenner');
  const [dob, setDob] = useState('19-oct-1994');
  const [cycle, setCycle] = useState('05 Days');
  const [expectDate, setExpectDate] = useState('20-May');
  const [periodDuration, setPeriodDuration] = useState('20 May - 27 May');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [openCycle, setOpenCycle] = useState(false);
  const [filePath, setFilePath] = useState(null);
  const {setToken} = useContext(AppContext);
  const [modalVisible, setModalVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const showDatePicker1 = () => {
    setOpenCycle(true);
  };
  const hideDatePicker1 = () => {
    setOpenCycle(false);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    setDob(moment(date).format('DD-MMM-YYYY'));
    hideDatePicker();
  };
  const Econfirm = date => {
    console.warn('A date has been picked: ', date);
    setExpectDate(moment(date).format('DD-MMM'));
    hideDatePicker1();
  };
  const captureImage = async type => {
    console.log('dfj');
    let options = {
      mediaType: type,
      // maxWidth: '100%',
      maxHeight: 300,
      quality: 1,
      videoQuality: 'low',
      durationLimit: 30, //Video max duration in seconds
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();
    if (isCameraPermitted || isStoragePermitted) {
      launchCamera(options, response => {
        console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled camera picker');
          return;
        } else if (response.errorCode == 'camera_unavailable') {
          alert('Camera not available on device');
          return;
        } else if (response.errorCode == 'permission') {
          alert('Permission not satisfied');
          return;
        } else if (response.errorCode == 'others') {
          alert(response.errorMessage);
          return;
        }
        let source = response;
        console.log(source, 'uri');
        setFilePath(source.assets[0].uri);
        // convertImage(source.assets[0].uri);
        refRBSheet.current.close();
      });
    }
  };
  const chooseFile = async () => {
    var options = {
      title: 'Select Image',
      customButtons: [
        {
          name: 'customOptionKey',
          title: 'Choose file from Custom Option',
        },
      ],
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, res => {
      console.log('Response = ', res);
      if (res.didCancel) {
        console.log('User cancelled image picker');
      } else if (res.error) {
        console.log('ImagePicker Error: ', res.error);
      } else if (res.customButton) {
        console.log('User tapped custom button: ', res.customButton);
        alert(res.customButton);
      } else {
        let source = res;
        console.log(source.assets[0].uri, 'uri');
        setFilePath(source.assets[0].uri);
        // convertImage(source.assets[0].uri);

        refRBSheet.current.close();
      }
    });
  };
  const requestCameraPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: 'Camera Permission',
            message: 'App needs camera permission',
          },
        );
        // If CAMERA Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: 'External Storage Write Permission',
            message: 'App needs write permission',
          },
        );
        // If WRITE_EXTERNAL_STORAGE Permission is granted
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        alert('Write permission err', err);
      }
      return false;
    } else return true;
  };
  return (
    <TouchableWithoutFeedback>
      <View
        style={{
          backgroundColor: backgroundColor,
          flex: 1,
          position: 'relative',
        }}>
        {/* corner blob */}
        <View style={{position: 'absolute', top: -38, left: 0, opacity: 0.7}}>
          <Image
            style={{width: 99}}
            resizeMode="contain"
            source={require('../../../../assets/images/PNG/upborder.png')}
          />
        </View>

        {/* butterfly */}
        <View
          style={{
            position: 'absolute',
            right: moderateScale(20, 0.1),
            top: moderateScale(40, 0.1),
          }}>
          <SVGImg width={80} height={80} />
        </View>

        {/* left leaf */}
        <View
          style={{
            position: 'absolute',
            top: moderateScale(90, 0.1),
            left: -30,
          }}>
          <SVGImg2 width={120} height={120} />
        </View>

        {/* left leaf */}
        <View
          style={{
            position: 'absolute',
            top: moderateScale(180, 0.1),
            right: 0,
          }}>
          <SVGImg3 />
        </View>

        <View
          style={{
            paddingTop: moderateScale(60, 0.1),
            paddingHorizontal: moderateScale(30, 0.1),
          }}>
          <Header navigation={navigation} />
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={s.center}>
            <Text style={s.txt1}>Edit Profile</Text>
            <View style={styles.imgView}>
              <Image
                style={styles.img}
                source={
                  filePath
                    ? {uri: filePath}
                    : require('../../../../assets/images/PNG/img.png')
                }
              />
              <View style={s.circle}>
                <TouchableOpacity
                  onPress={() => refRBSheet.current.open()}
                  style={s.edit}>
                  <Entypo
                    name={'edit'}
                    size={moderateScale(10, 0.1)}
                    color={'#fff'}
                  />
                </TouchableOpacity>
              </View>
              <View style={{marginTop: moderateScale(-27, 0.1)}}>
                <Text style={styles.name}>Laura Jenner</Text>
              </View>
            </View>
            <Text style={styles.name1}>Information</Text>

            <View style={s.input}>
              <View style={s.fView}>
                <View style={s.fInside}>
                  <TextInput
                    style={{
                      color: 'gray',
                    }}
                    placeholder="First Name"
                    placeholderTextColor={'gray'}
                    onChangeText={v => setName(v)}
                    // value={name}
                  />
                </View>
                <View style={s.fInside2}>
                  <Text style={s.txt}> {name} </Text>
                </View>
              </View>

              <View style={s.fView}>
                <View style={s.fInside}>
                  <TextInput
                    placeholder="Last Name"
                    placeholderTextColor={'gray'}
                    onChangeText={v => setLast(v)}
                    // value={name}
                  />
                </View>
                <View style={s.fInside2}>
                  <Text style={s.txt}> {last} </Text>
                </View>
              </View>
              <View style={s.fView}>
                <View style={s.fInside}>
                  <TouchableOpacity onPress={showDatePicker}>
                    <TextInput
                      placeholder="D.O.B"
                      editable={false}
                      placeholderTextColor={'gray'}
                      onChangeText={v => setDob(v)}
                      // value={name}
                    />
                    <DateTimePickerModal
                      isVisible={isDatePickerVisible}
                      mode="date"
                      maximumDate={new Date('2010-12-31')}
                      onConfirm={handleConfirm}
                      onCancel={hideDatePicker}
                    />
                  </TouchableOpacity>
                </View>
                <View style={s.fInside2}>
                  <Text style={s.txt}> {dob} </Text>
                </View>
              </View>
              <View style={s.fView}>
                <View style={s.fInside}>
                  <TextInput
                    placeholder="Cycle Duration"
                    placeholderTextColor={'gray'}
                    onChangeText={v => setCycle(v)}
                    // value={name}
                  />
                </View>
                <View style={s.fInside2}>
                  <Text style={s.txt}> {cycle} </Text>
                </View>
              </View>
              <View style={s.fView}>
                <View style={s.fInside}>
                  <TouchableOpacity onPress={showDatePicker1}>
                    <TextInput
                      editable={false}
                      placeholder="Expected Date"
                      placeholderTextColor={'gray'}
                      onChangeText={v => setExpectDate(v)}
                      // value={name}
                    />
                    <DateTimePickerModal
                      isVisible={openCycle}
                      mode="date"
                      onConfirm={Econfirm}
                      onCancel={hideDatePicker1}
                    />
                  </TouchableOpacity>
                </View>
                <View style={s.fInside2}>
                  <Text style={s.txt}> {expectDate} </Text>
                </View>
              </View>
              <View style={s.fView}>
                <View style={s.fInside}>
                  <TextInput
                    placeholder="period Duration"
                    placeholderTextColor={'gray'}
                    onChangeText={v => setPeriodDuration(v)}
                    // value={name}
                  />
                </View>
                <View style={s.fInside2}>
                  <Text style={s.txt}> {periodDuration} </Text>
                </View>
              </View>

              <View style={s.btn}>
                <Button
                  text={'Save'}
                  onPress={() => {
                    // navigation.navigate('home');
                  }}
                />
              </View>

              {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
            </View>
            <View style={{}}>
              <View
                style={{
                  marginTop: moderateScale(-20, 0.1),
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image
                  resizeMode="contain"
                  style={{width: moderateScale(280, 0.1)}}
                  source={require('../../../../assets/images/profile-btm.jpg')}
                />
              </View>
            </View>

            {/* <View style={{height: moderateScale(50, 0.1)}}></View> */}
          </View>
          <View style={s.vector}>
            <Image
              style={{width: 99, top: 45, opacity: 0.7}}
              resizeMode="contain"
              source={require('../../../../assets/images/PNG/downborder.png')}
            />
          </View>
        </ScrollView>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          height={300}
          openDuration={250}
          customStyles={{
            container: {
              alignItems: 'center',
              height: moderateScale(220),
              borderRadius: moderateScale(20, 0.1),
            },
          }}>
          <View
            style={{
              marginVertical: moderateScale(30, 0.1),
              justifyContent: 'center',
              alignContent: 'center',
            }}>
            <View>
              <Button
                onPress={() => captureImage('photo')}
                style={{
                  marginVertical: moderateScale(15, 0.1),
                }}
                Ctext={'Camera'}
                type={'camera'}
                iconName={'camera'}
              />
            </View>

            <View>
              <Button
                onPress={() => chooseFile('photo')}
                Ctext={'Gallery'}
                style={s.capturebtn}
                type={'camera'}
                iconName={'md-image-outline'}
              />
            </View>
          </View>
        </RBSheet>
      </View>
    </TouchableWithoutFeedback>
  );
};
export default Profile;
