import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {services} from '../../utils/data';
import Card from './Card';

const Services = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.service}>Services</Text>
      <FlatList
        data={services}
        renderItem={({item}) => (
          <Card name={item.name} price="12" id={item.id} image={item.image} />
        )}
        horizontal
        contentContainerStyle={styles.card}
      />
    </View>
  );
};

export default Services;

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
  },
  card: {
    gap: 12,
  },
  service: {
    fontSize: 18,
    color: '#042c4e',
    fontWeight: '700',
    fontFamily: 'Poppins-Medium',
    marginBottom: 12,
  },
});
