import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';
import ResultItem from './ResultItem';

const ResultList = ({results, title}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return <ResultItem item={item} />;
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

export default ResultList;
