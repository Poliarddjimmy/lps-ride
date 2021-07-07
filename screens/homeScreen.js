import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/dimensions';



// local import
import Layout from '../components/layout/layout';

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [mapLocation, setMapLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  useEffect(() => {
    location && setMapLocation(regionFrom(location?.coords?.latitude, location?.coords?.longitude, location?.coords?.accuracy))
  }, [location])


  let text = 'Waiting..';
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }


  const ASPECT_RATIO = SCREEN_WIDTH / SCREEN_HEIGHT;

  const regionFrom = (lat, lon, accuracy) => {
    const oneDegreeOfLongitudeInMeters = 111.32 * 1000;
    const circumference = (40075 / 360) * 1000;

    const latDelta = accuracy * (1 / (Math.cos(lat) * circumference));
    const lonDelta = (accuracy / oneDegreeOfLongitudeInMeters);

    return {
      latitude: lat,
      longitude: lon,
      latitudeDelta: Math.max(0, latDelta),
      longitudeDelta: Math.max(0, lonDelta)
    };
  }
  const onRegionChange = (region) => {
    // console.log("Sa se nouvo a", JSON.stringify(region))
  }

  return (
    <Layout>
      {mapLocation &&
        <MapView
          initialRegion={{
            latitude: mapLocation?.latitude,
            longitude: mapLocation?.longitude,
            latitudeDelta: 0.015,
            longitudeDelta: ASPECT_RATIO * 0.0121,
          }}

          onRegionChange={onRegionChange}
          scrollEnabled={true}
          hasZoom={true}
          maxZoom={0.1}
          scalesPageToFit={false}
          style={styles.map}
        >
          <Marker
            coordinate={{ latitude: mapLocation?.latitude, longitude: mapLocation?.longitude }}
            title={"Current Location"}
          />
        </MapView>
      }

      <View
        style={{
          alignSelf: 'center',
          alignContent: 'center',
          padding: 10,
          paddingHorizontal: 35,
          margin: 5,
          borderRadius: 5,
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
      </View>
    </Layout>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});