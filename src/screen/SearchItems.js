import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  StyleSheet,
} from 'react-native';
import yelp from '../api/yelp';

const SearchItemsScreen = ({navigation}) => {
  const [results, setResults] = useState(null);

  const id = navigation.getParam('id');

  const getItems = async (id) => {
    const response = await yelp.get(`/${id}`);
    setResults(response.data);
  };

  useEffect(() => {
    getItems(id);
  }, []);

  if (!results) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{results.name}</Text>
      <Text style={styles.subHeading}>Phone: {results.display_phone}</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={results.photos}
        keyExtractor={(photo) => photo}
        renderItem={({item}) => {
          return (
            <ScrollView>
              <Image style={styles.image} source={{uri: item}} />
            </ScrollView>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    marginVertical: 10,
  },
  subHeading: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 2,
  },
  image: {
    height: 200,
    width: 300,
    marginVertical: 7,
    borderRadius: 12,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SearchItemsScreen;
