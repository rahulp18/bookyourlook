import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
const CustomSearchBar = () => {
  return (
    <View style={styles.container}>
      <Icon name="search" size={18} color="#042c4e" />
      <TextInput
        placeholder="Search for services"
        placeholderTextColor="#042c4e"
        style={styles.input}
      />
      <Icon name="mic" size={18} color="#042c4e" />
    </View>
  );
};

export default CustomSearchBar;

const styles = StyleSheet.create({
  container: {
    borderColor: '#042c4e',
    borderWidth: 1,
    borderRadius: 9,
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  input: {
    paddingVertical: 9,
    flex: 1,
    color: '#042c4e',
    fontWeight: '600',
  },
});
