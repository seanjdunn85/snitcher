import React from 'react';
import { ExpoConfigView } from '@expo/samples';
import MapView from 'react-native-maps';

export default class MapScreen extends React.Component {
  static navigationOptions = {
    title: 'Map',
  };

  render() {
    /* Go ahead and delete ExpoConfigView and replace it with your
     * content, we just wanted to give you a quick view of your config */
    return <MapView 
        region={{
            latitude:39.7393,
            longitude: -104.9903,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421
        }}
    />;
  }
}
