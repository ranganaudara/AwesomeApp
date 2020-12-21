import React, {Component} from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlacesList from './src/components/PlaceList/PlaceList';
import PlaceDetails from './src/components/PlaceDetails/PlaceDetails';

import {
  addPlace,
  deletePlace,
  selectPlace,
  deselectPlace,
} from './src/store/actions/index';

class App extends Component {
  state = {
    places: [],
    selectedPlace: null,
  };

  placeSubmitHandler = (placeName) => {
    this.props.onAddPlace(placeName);
  };

  placeSelectedHandler = (key) => {
    this.props.onSelectPlace(key);
  };

  onPlaceDeleteHandler = () => {
    this.props.onDeletePlace();
  };

  modalClosedHandler = () => {
    this.props.onDeselectPlace();
  };

  render() {
    const {places, selectedPlace} = this.props;
    return (
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container}>
          <PlaceDetails
            selectedPlace={selectedPlace}
            onItemDeleted={this.onPlaceDeleteHandler}
            onModalClosed={this.modalClosedHandler}
          />
          <PlaceInput placeSubmitHandler={this.placeSubmitHandler} />
          <PlacesList
            palcesList={places}
            onItemSelected={this.placeSelectedHandler}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  safeArea: {
    flex: 1,
  },
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
  listContainer: {
    width: '100%',
    marginLeft: 8,
    marginRight: 8,
  },
});

const mapStateToProps = (state) => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
