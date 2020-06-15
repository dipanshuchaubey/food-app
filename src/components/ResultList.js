import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ResultItem from './ResultItem';
import {withNavigation} from 'react-navigation';

const ResultList = ({results, title, navigation}) => {
  if (!results.length) {
    return null;
  }

  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('SearchItems', {id: item.id})}>
              <ResultItem item={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 15,
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 5,
    marginBottom: 5,
  },
});

export default withNavigation(ResultList);
