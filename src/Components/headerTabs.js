import {StyleSheet, Text, Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Bell from 'react-native-vector-icons/FontAwesome5';
import Setting from 'react-native-vector-icons/Ionicons';
import {useDispatch, useSelector} from 'react-redux';
import {moderateScale} from 'react-native-size-matters';
import {black} from '../Constants';

const HeaderTabs = ({navigation}) => {
  const [focus, setFocus] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={focus ? styles.viewT : null}
        onPress={() => {
          navigation.navigate('notification');
          setFocus(false);
        }}>
        <Text style={styles.txt}>Notifications</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={!focus ? styles.viewT : null}
        onPress={() => {
          navigation.navigate('reminder');
          setFocus(true);
        }}>
        <Text style={styles.txt}>Reminder</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HeaderTabs;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: moderateScale(16, 0.1),
    borderRadius: moderateScale(5, 0.1),
  },
  txt: {
    paddingBottom: moderateScale(6, 0.1),
    color: black,
    fontWeight: '800',
    fontSize: moderateScale(13, 0.1),
    lineHeight: moderateScale(14, 0.1),
  },
  viewT: {
    borderBottomWidth: 1,
    borderBottomColor: black,
  },
});
