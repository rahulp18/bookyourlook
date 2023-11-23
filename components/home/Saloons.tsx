import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {salons} from '../../utils/data';
import SalonCard from './SalonCard';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationProp, useNavigation} from '@react-navigation/native';

const Saloons = () => {
  const navigation = useNavigation<NavigationProp<any>>();

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.heading}>Nearby Salon</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Listing')}>
          <Text style={styles.subtitle}>View all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={salons}
        renderItem={({item}) => <SalonCard data={item} />}
        horizontal
        contentContainerStyle={styles.card}
      />
    </View>
  );
};

export default Saloons;

const styles = StyleSheet.create({
  container: {
    marginTop: 16,
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
