import {
  Button,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {AuthHeader} from '../components';
import {CustomInput} from '../components/shared';
import Icon from 'react-native-vector-icons/Feather';
import FoundationIcon from 'react-native-vector-icons/Foundation';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';

const SignUp = ({navigation}: any) => {
  const [isRemind, setIsRemind] = useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <AuthHeader navigation={navigation} title="Sign Up" />
      <View style={styles.formContainer}>
        <CustomInput
          placeholder="What's your name"
          type="text"
          icon={<Icon name="user" size={20} color="gray" />}
        />
        <CustomInput
          placeholder="Your Email"
          type="text"
          icon={<FoundationIcon name="mail" size={20} color="gray" />}
        />
        <CustomInput
          placeholder="Your Phone"
          type="text"
          icon={<FontAwesomeIcon name="phone" size={20} color="gray" />}
        />
        <CustomInput
          placeholder="Write your password"
          type="password"
          icon_two={<FontAwesomeIcon name="eye-slash" size={20} color="gray" />}
          icon={<Icon name="lock" size={20} color="gray" />}
        />
        <View style={[styles.flex]}>
          <Text style={[styles.text]}>Remind me next time</Text>
          <TouchableOpacity onPress={() => setIsRemind(!isRemind)}>
            <FontAwesomeIcon
              name={isRemind ? 'toggle-on' : 'toggle-off'}
              size={24}
              color="#042c4e"
            />
          </TouchableOpacity>
        </View>
        <View style={[styles.button]}>
          <TouchableOpacity onPress={() => {}}>
            <Text style={[styles.text1]}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[styles.center]}>
        <Text style={[styles.text]}>Already have an account ? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Text style={styles.sign_in}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },
  formContainer: {
    gap: 20,
    marginTop: 35,
  },
  flex: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'black',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  text1: {
    color: 'white',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#77BEF8',
    paddingVertical: 12,
    alignItems: 'center',
    borderRadius: 12,
    marginTop: 20,
  },
  center: {
    alignItems: 'center',
    marginTop: 12,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  sign_in: {
    color: '#77BEF8',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    fontWeight: '700',
  },
});
