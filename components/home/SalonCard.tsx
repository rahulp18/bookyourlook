import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import FontAwsIcon from 'react-native-vector-icons/FontAwesome';
interface Salon {
  id: number;
  name: string;
  rating: number;
  image: string;
}
const MAX_NAME_LENGTH = 15;
export const truncateName = (name: string) => {
  if (name.length > MAX_NAME_LENGTH) {
    return name.substring(0, MAX_NAME_LENGTH) + '...';
  }
  return name;
};
const SalonCard = ({data}: {data: Salon}) => {
  const {id, image, name, rating} = data;

  return (
    <ImageBackground key={id} style={styles.bgImage} source={{uri: image}}>
      <View style={styles.container}>
        <Text style={styles.name}>{truncateName(name)}</Text>
        <View style={styles.rating}>
          <FontAwsIcon name="star" color="gold" size={14} />
          <Text style={{color: '#fff'}}>{rating}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default SalonCard;

const styles = StyleSheet.create({
  bgImage: {
    height: 200,
    width: 200,
    position: 'relative',

    overflow: 'hidden',
    marginTop: 10,
  },
  container: {
    position: 'absolute',
    height: 50,
    width: '100%',
    bottom: 0,
    left: 0,
    backgroundColor: '#000000aa',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  name: {
    color: '#fff',
    fontSize: 14,
    fontFamily: 'Inter-Medium',
  },
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
});
