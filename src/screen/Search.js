import React, {useState} from 'react';
import {ScrollView, Text, StatusBar, StyleSheet} from 'react-native';
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
    <>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={() => searchApi(searchText)}
      />

      {error ? <Text>{error}</Text> : null}

      <ScrollView>
        <ResultList results={resultsPriceFilter('$')} title="Budget Friendly" />
        <ResultList results={resultsPriceFilter('$$')} title="Mid Range" />
        <ResultList
          results={resultsPriceFilter('$$$')}
          title="Most Expensive"
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
