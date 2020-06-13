import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ResultItem = ({item}) => {
  return (
    <View style={styles.conatiner}>
      <Image style={styles.image} source={{uri: item.image_url}} />
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.info}>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    marginLeft: 15,
    marginBottom: 7,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultItem;
