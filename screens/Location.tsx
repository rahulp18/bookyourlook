import {Image, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import MetaIcon from 'react-native-vector-icons/MaterialCommunityIcons';

const Location = ({navigation}: any) => {
  const ClickBack = () => {
    navigation.goBack();
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.circle} onPress={ClickBack}>
        <Icon name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <View style={styles.box}>
        <Text style={styles.text2}>Hi Rahul, Nice to meet you!</Text>
        <Text style={styles.text}>See services around </Text>
        <Image
          style={styles.imageContainer}
          source={require('../assets/images/location.webp')}
          alt="location"
        />
        <View style={{width: '100%', gap: 12}}>
          <TouchableOpacity
            style={[styles.btn]}
            onPress={() => {
              navigation.navigate('HomeTabs');
            }}>
            <MetaIcon name="crosshairs-gps" size={20} color="#fff" />
            <Text style={styles.btn_text}>Your current Location</Text>
          </TouchableOpacity>
          <View style={[styles.inputContainer]}>
            <Icon name="search" size={18} color="#000" />
            <TextInput
              placeholderTextColor="#000"
              style={[styles.input]}
              placeholder="Some other location"
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Location;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(250, 249, 246)',
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  circle: {
    backgroundColor: '#77BEF8',
    padding: 9,
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 26,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025,
    shadowRadius: 3.84,
    elevation: 5,
  },
  box: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text2: {
    color: 'gray',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    textTransform: 'capitalize',
  },
  text: {
    color: 'black',
    fontSize: 26,
    fontFamily: 'Inter-Medium',
    textTransform: 'capitalize',
  },
  imageContainer: {
    height: 250,
    width: '100%',
    marginTop: 0,
  },
  btn_text: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  btn: {
    backgroundColor: '#77BEF8',
    width: '100%',
    paddingVertical: 14,
    borderRadius: 9,
    paddingHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 4,
  },
  inputContainer: {
    borderColor: '#77BEF8',
    borderWidth: 2,
    borderRadius: 9,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
    paddingHorizontal: 9,
  },
  input: {
    flex: 1,
    color: '#000',
    paddingVertical: 9,
  },
});
