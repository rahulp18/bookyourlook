import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const User = () => {
  const [badge, setBadge] = useState(2);
  return (
    <View style={styles.container}>
      <View style={styles.userContainer}>
        <Image
          source={require('../../assets/images/bg.jpg')}
          style={styles.image}
        />
        <View>
          <Text style={[styles.text, styles.heading]}>
            Hi, <Text style={{color: '#77BEF8'}}>Rahul Pradhan</Text>
          </Text>
          <Text style={[styles.text, styles.location]}>Odisha,Cuttack</Text>
        </View>
      </View>
      <View style={styles.badgeContainer}>
        <MaterialIcons
          name="circle-notifications"
          color={'#042c4e'}
          size={34}
        />
        {badge > 0 && (
          <View style={styles.badge}>
            <Text style={styles.badgeText}>{badge > 9 ? '9+' : badge}</Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default User;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userContainer: {
    flexDirection: 'row',
    gap: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 100,
    objectFit: 'contain',
  },
  text: {
    color: '#000',
    fontFamily: 'Inter-Regular',
  },
  heading: {
    fontWeight: '700',
    fontSize: 18,
  },
  location: {
    fontWeight: '400',
    fontSize: 12,
    color: '#818589',
  },
  badgeContainer: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    top: -5,
    right: -5,
    backgroundColor: 'red',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
});
