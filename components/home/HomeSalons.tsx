import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {salons} from '../../utils/data';
import SalonCard from './SalonCard';
import HomeSalonCard from './HomeSalonCard';

const HomeSalons = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Salon Service At Home</Text>
        <Text style={styles.subtitle}>View all</Text>
      </View>
      <FlatList
        data={salons}
        renderItem={({item}) => <HomeSalonCard data={item} />}
        horizontal
        contentContainerStyle={styles.card}
      />
    </View>
  );
};

export default HomeSalons;

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  heading: {
    color: '#042C4E',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    color: '#77BEF8',
    fontSize: 14,
    fontWeight: '600',
  },
  card: {
    gap: 9,
  },
});
