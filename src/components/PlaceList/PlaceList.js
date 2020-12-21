import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import ListItem from '../ListItem/ListItem';

const placeList = (props) => (
  <FlatList
    keyExtractor={(item) => item.key.toString()}
    style={styles.listContainer}
    data={props.palcesList}
    renderItem={(info) => (
      <View style={styles.listContainer}>
        <ListItem
          placeName={info.item.name}
          placeImage={info.item.image}
          onItemPressed={() => props.onItemSelected(info.item.key)}
        />
      </View>
    )}
  />
);

const styles = StyleSheet.create({
  listContainer: {
    width: '100%',
    marginLeft: 8,
    marginRight: 8,
  },
});

export default placeList;
