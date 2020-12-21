import React, {useState} from 'react';
import {View, Button, TextInput, StyleSheet} from 'react-native';

const placeInput = (props) => {
  const [enteredPlace, setEnteredPlace] = useState('');

  const placeNameChangedHandler = (placeName) => {
    setEnteredPlace(placeName);
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.placeInput}
        placeholder="An awesome place"
        value={enteredPlace}
        onChangeText={placeNameChangedHandler}
      />
      <Button
        title="Add"
        color="#841584"
        style={styles.placeButton}
        onPress={props.placeSubmitHandler.bind(this, enteredPlace)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  placeInput: {
    width: '70%',
    borderBottomColor: 'black',
    borderWidth: 1,
  },
  placeButton: {
    width: '30%',
  },
});

export default placeInput;
