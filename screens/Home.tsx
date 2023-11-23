import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native';
import {
  CustomSearchBar,
  HomeSalons,
  PopularServices,
  Saloons,
  Services,
  User,
} from '../components/home';

const Home = () => {
  return (
    <ScrollView style={styles.container_one}>
      <SafeAreaView style={styles.container}>
        <User />
        <CustomSearchBar />
        <Services />
        <Saloons />
        <HomeSalons />
        <PopularServices />
      </SafeAreaView>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 12,
  },
  container_one: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
