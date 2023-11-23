import {
  StyleSheet,
  Text,
  SafeAreaView,
  ImageBackground,
  View,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.imageBg}
        source={require('../assets/images/bg.jpg')}
        resizeMode="cover">
        <LinearGradient
          colors={['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.5)', '#000']}
          style={styles.overlay}>
          <View style={styles.content}>
            <Text style={styles.text}>Welcome to </Text>
            <Text style={styles.logo}>BookYourLook</Text>

            <Text style={styles.second}>
              Your Beauty, Your Time: Book Your Salon Experience Anywhere!
            </Text>
          </View>
          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.signup]}
              onPress={() => navigation.navigate('SignUp')}>
              <Text
                style={{
                  color: '#77BEF8',
                  fontWeight: '600',
                  fontFamily: 'Inter-Medium',
                  fontSize: 14,
                }}>
                Sign up
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.login]}
              onPress={() => navigation.navigate('Login')}>
              <Text
                style={{
                  color: 'white',
                  fontWeight: '600',
                  fontFamily: 'Inter-Medium',
                  fontSize: 14,
                }}>
                Login
              </Text>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
  },
  logo: {
    fontSize: 34,
    fontFamily: 'Montserrat-Medium',
    color: 'white',
  },
  text: {
    fontSize: 30,
    fontFamily: 'Montserrat-Light',
    color: 'white',
  },
  imageBg: {
    flex: 1,
    height: '100%',
  },
  second: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    marginTop: 5,
    color: 'white',
  },
  content: {
    marginBottom: 20,
    marginHorizontal: 20,
    flex: 1,
    zIndex: 10,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    height: '100%',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
  },
  button: {
    paddingVertical: 12,
    borderRadius: 4,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signup: {
    backgroundColor: 'white',
  },
  login: {
    backgroundColor: '#77BEF8',
  },
  buttons: {
    display: 'flex',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 16,
    marginHorizontal: 20,
  },
});
