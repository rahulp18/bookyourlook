import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

interface Props {
  title: string;
  navigation: any;
}
const AuthHeader = ({title, navigation}: Props) => {
  const ClickBack = () => {
    navigation.navigate('Welcome');
  };
  return (
    <View>
      <TouchableOpacity style={styles.circle} onPress={ClickBack}>
        <Icon name="arrow-left" size={24} color="white" />
      </TouchableOpacity>
      <Text style={styles.heading}>{title}</Text>
      <Text style={styles.subheading}>
        {title} with one of the following options.
      </Text>
      <View style={styles.flex}>
        <Image
          source={require('../assets/images/google.png')}
          alt="Google"
          style={[styles.logo]}
        />
        <Image
          source={require('../assets/images/linkedin.png')}
          alt="Google"
          style={[styles.icon]}
        />
        <Image
          source={require('../assets/images/facebook.png')}
          alt="Google"
          style={[styles.icon]}
        />
      </View>
    </View>
  );
};

export default AuthHeader;

const styles = StyleSheet.create({
  heading: {
    color: '#000',
    fontSize: 28,
    fontFamily: 'Inter-Medium',
    fontWeight: '600',
  },
  subheading: {
    color: '#A6A49F',
    fontSize: 14,
    fontFamily: 'Inter-Regular',
  },
  flex: {
    display: 'flex',
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'row',
    marginTop: 10,
  },
  logo: {
    height: 30,
    width: 40,
  },
  icon: {
    height: 30,
    width: 30,
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
});
