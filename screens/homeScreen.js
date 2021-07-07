import React, { useState, useEffect } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/dimensions';
import styled from 'styled-components/native';
import { SafeAreaView, StyleSheet, View, Text } from 'react-native';


// local import
import Layout from '../components/layout/layout';
import { MenuBotton } from "../services/navigationServices"
import { isAndroid } from "../utils/platform"

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
    <Layout navigation={navigation}>
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

      <Container>
        {/* <MenuBotton navigation={navigation} /> */}
      </Container>
      <RequestContainer>
        <RequestText>
          Fè yon Rekèt
        </RequestText>
      </RequestContainer>
    </Layout>
  );
}
export default HomeScreen

const styles = StyleSheet.create({
  map: {
    flex: 1,
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },


  bottomView: {

  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },



});


const Container = styled.View`
  position: absolute;
  padding: 10px;
  paddingHorizontal: 35px;
  margin: 5px; 
  width: 100%;
`;

const RequestContainer = styled.TouchableOpacity`
  width: 90%;
  margin: 20px;
  height: 80px;
  border-radius:5px;
  backgroundColor: ${props => props.theme.colors.warningFade}; 
  border-width: 2px; 
  border-color: ${props => props.theme.colors.warning};
  justifyContent: center;
  alignItems: center;
  position: absolute; 
  bottom: 50px; 
  
`;

const RequestText = styled.Text`
  font-family: ${props => props.theme.font.semiBold};
  font-size: 40px;
  color: ${props => props.theme.colors.white}
`;