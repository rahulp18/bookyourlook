import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import StarRating from './RatingComponent';
import EntypoIcon from 'react-native-vector-icons/Entypo';
export interface Salon {
  id: number;
  name: string;
  rating: number;
  type: 'Unisex' | 'Men' | 'Women'; // Adjust types as needed
  detail: string;
  image: string;
}
const SalonCard = ({item}: {item: Salon}) => {
  const {name, detail, id, image, rating, type} = item;
  return (
    <View key={id} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.content}>
          <Text style={[styles.title]}>
            {name} <Text style={styles.subtitle}>{`(${type})`}</Text>{' '}
          </Text>
          <StarRating rating={rating} />
          <Text style={styles.text}>{detail}</Text>
          <View style={styles.flex}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.btnTxt}>Book Now</Text>
            </TouchableOpacity>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <EntypoIcon name="location-pin" color="#042c4e" size={22} />
              <Text style={styles.text1}>6km</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SalonCard;

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 200,
    width: '100%',
    flexDirection: 'row',
  },
  imageContainer: {
    position: 'relative',
    width: '45%',
    height: '100%',
    backgroundColor: 'gray',
    borderTopLeftRadius: 12,
    borderTopEndRadius: 12,
    overflow: 'hidden',
  },
  content: {
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.025, // Increased opacity for more visibility
    shadowRadius: 6, // Increased radius for a more spread-out effect
    elevation: 4, // Elevation for Android shadow effect
    backgroundColor: 'white',
    height: '100%', // Height as needed
    padding: 10, // Add padding to see shadow effect clearly
  },
  contentContainer: {
    position: 'relative',
    paddingTop: 20,
    width: '55%',
    height: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#042c4e',
  },
  subtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    color: '#042c4e',
  },
  text: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#000',
    marginVertical: 4,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 5,
  },
  button: {
    backgroundColor: '#77BEF8',
    borderRadius: 6,
    paddingHorizontal: 9,
    paddingVertical: 6,
  },
  btnTxt: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-SemiBold',
  },
  text1: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 12,
    color: '#000',
  },
});
