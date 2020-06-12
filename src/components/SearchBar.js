import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const SearchBar = ({searchText, setSearchText, onSubmit}) => {
  return (
    <View style={styles.searchScreen}>
      <Icon name="search" size={30} style={styles.icon} />
      <TextInput
        value={searchText}
        onChangeText={(text) => setSearchText(text)}
        placeholder="Search"
        autoCapitalize="none"
        autoCorrect={false}
        onEndEditing={onSubmit}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  searchScreen: {
    backgroundColor: '#d6d6d6',
    paddingHorizontal: 10,
    borderRadius: 6,
    marginHorizontal: 15,
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingLeft: 20,
  },
  icon: {},
});

export default SearchBar;
