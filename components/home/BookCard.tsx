import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/EvilIcons';
interface Salon {
  id: number;
  name: string;
  rating: number;
  image: string;
}
const BookCard = ({data}: {data: Salon}) => {
  const MAX_NAME_LENGTH = 12;
  const truncateName = (name: string) => {
    if (name.length > MAX_NAME_LENGTH) {
      return name.substring(0, MAX_NAME_LENGTH) + '...';
    }
    return name;
  };
  const {image, name, id} = data;
  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.text}>{truncateName(name)}</Text>
        <View style={styles.flex}>
          <Text style={styles.text1}>{'10Km'}</Text>
          <Icon name="location" size={14} color={'#A6A49F'} />
        </View>
      </View>
    </View>
  );
};

export default BookCard;

const styles = StyleSheet.create({
  container: {
    height: 150,
    width: 170,
    backgroundColor: '#fff',
    padding: 9,
    marginVertical: 9,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025, // Adjust the shadow opacity as needed (0 to 1)
    shadowRadius: 4,
    elevation: 4, // Elevation for Android shadow
    borderRadius: 12,
  },
  image: {
    height: 100,
    width: '100%',
    borderRadius: 12,
    objectFit: 'contain',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: '#000',
    fontWeight: '700',
  },
  text1: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 10,
    color: '#A6A49F',
  },
  flex: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
