import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import searchResult from '../results/searchResult';
import ResultList from '../components/ResultList';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [result, error, searchApi] = searchResult();

  const resultsPriceFilter = (price) => {
    return result.filter((item) => {
      if (item.price === price) {
        return item;
      }
    });
  };

  return (
    <View>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={() => searchApi(searchText)}
      />

      {error ? <Text>{error}</Text> : null}

      <ResultList results={resultsPriceFilter('$')} title="Budget Friendly" />
      <ResultList results={resultsPriceFilter('$$')} title="Mid Range" />
      <ResultList results={resultsPriceFilter('$$$')} title="Most Expensive" />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
