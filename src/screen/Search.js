import React, {useState} from 'react';
import {View, Text, StatusBar, StyleSheet} from 'react-native';
import SearchBar from '../components/SearchBar';
import yelp from '../api/yelp';

const SearchScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [result, setResult] = useState([]);
  const [error, setError] = useState('');

  const searchApi = async () => {
    try {
      const response = await yelp.get('/search', {
        params: {
          term: searchText,
          location: 'san jose',
          limit: 50,
        },
      });

      setResult(response.data.businesses);
    } catch (err) {
      setError('Something went wrong, Please try again!');
    }
  };

  return (
    <View>
      <StatusBar backgroundColor="#FFF" barStyle="dark-content" />

      <SearchBar
        searchText={searchText}
        setSearchText={setSearchText}
        onSubmit={() => searchApi()}
      />

      {error ? <Text>{error}</Text> : null}

      <Text>Found total {result.length} results</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
