import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
interface ServiceProps {
  name: string;
  id: number;
  image: string;
  price: string;
}
const Card = ({name, id, image}: ServiceProps) => {
  return (
    <View style={styles.container} key={id}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{uri: image}} />
      </View>
      <Text style={styles.name}>{name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    backgroundColor: '#fff',
    borderColor: '#77BEF8',
    borderWidth: 2,
    height: 70,
    width: 70,
    borderRadius: 100,
    position: 'relative',
    overflow: 'hidden',
    padding: 2,
  },
  image: {
    height: '100%',
    width: '100%',
    objectFit: 'contain',
    borderRadius: 100,
  },
  name: {
    color: '#000',
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
  },
});
