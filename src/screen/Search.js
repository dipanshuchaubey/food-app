import React, {useState} from 'react';
import {View, StatusBar, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');

  return (
    <View>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={() => console.log('Submitted')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
