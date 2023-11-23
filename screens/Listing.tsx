import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import {NavigationProp} from '@react-navigation/native';
import {CustomSearchBar} from '../components/home';
import {salons} from '../utils/data';
import {SalonCard} from '../components/shared';
const Listing = ({navigation}: {navigation: NavigationProp<any>}) => {
  const [activeTab, setActiveTab] = useState('tab1');
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.flexBox}>
          <TouchableOpacity
            style={styles.circle}
            onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color="white" />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Filters')}>
            <IoniconsIcon name="filter-sharp" size={28} color="#000" />
          </TouchableOpacity>
        </View>
        <CustomSearchBar />
        {/* Mode */}
        <View style={styles.tabContainer}>
          <TouchableOpacity
            onPress={() => setActiveTab('tab1')}
            style={styles.center}>
            <Text
              style={[
                styles.text,
                activeTab === 'tab1' ? styles.active : styles.inactive,
              ]}>
              Nearby Salons
            </Text>
            <View style={activeTab === 'tab1' && styles.tab} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setActiveTab('tab2')}
            style={styles.center}>
            <Text
              style={[
                styles.text,
                activeTab === 'tab2' ? styles.active : styles.inactive,
              ]}>
              Most Visited
            </Text>
            <View style={activeTab === 'tab2' && styles.tab} />
          </TouchableOpacity>
        </View>
        {/* Show Flat Listing */}
        <View style={styles.cards}>
          {activeTab === 'tab1'
            ? salons.map(salon => <SalonCard key={salon.id} item={salon} />)
            : salons
                .slice(3, 6)
                .map(salon => <SalonCard key={salon.id} item={salon} />)}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Listing;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingVertical: 12,
    backgroundColor: '#fff',
  },

  circle: {
    backgroundColor: '#77BEF8',
    padding: 9,
    width: 45,
    height: 45,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.025,
    shadowRadius: 3.84,
    elevation: 5,
  },
  flexBox: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabContainer: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  tab: {
    backgroundColor: '#042c4e',
    height: 4,
    width: 30,
    borderRadius: 12,
  },
  active: {
    color: '#042c4e',
  },
  text: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  inactive: {
    color: '#A6A49F',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3,
  },
  cards: {
    gap: 20,
    marginVertical: 20,
  },
});
