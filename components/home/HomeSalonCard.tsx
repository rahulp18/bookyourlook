import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {truncateName} from './SalonCard';
import {RatingComponent} from '../shared';
interface Salon {
  id: number;
  name: string;
  rating: number;
  image: string;
}
const HomeSalonCard = ({data}: {data: Salon}) => {
  const {image, name, id, rating} = data;
  return (
    <View key={id} style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{uri: image}} style={styles.image} />
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{truncateName(name)}</Text>
        <View
          style={{
            alignItems: 'center',
          }}>
          <RatingComponent rating={rating} />
        </View>
        <Text style={styles.location}>{'Choudwar,Cuttack, Odisha'}</Text>
      </View>
    </View>
  );
};

export default HomeSalonCard;

const styles = StyleSheet.create({
  container: {
    marginVertical: 8,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: 250,
    height: 100,
    padding: 6,
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
  imageContainer: {
    width: '40%',
    backgroundColor: 'green',
    borderRadius: 12,
    overflow: 'hidden',
  },
  contentContainer: {
    width: '60%',
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'cover',
  },
  name: {
    color: '#000',
    fontFamily: 'Inter-Medium',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: '600',
  },
  location: {
    color: '#A6A49F',
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 5,
  },
});
