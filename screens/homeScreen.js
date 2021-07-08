import React, { useState, useEffect, useRef } from 'react';
import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from '../utils/dimensions';
import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import axios from 'axios';


// local import
import Layout from '../components/layout/layout';
import {API_KEY} from "@env"

const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [destination, setDestination] = useState(null);
  const [mapLocation, setMapLocation] = useState(null);

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

  const ref = useRef();

  useEffect(() => {
    ref.current?.setAddressText('');
  }, []);


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

  const getPlaceId = async (details) => {
    //get the location using the place_id
    const { data } = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json?placeid=${details?.place_id}&key=${API_KEY}`)
    const { location } = data?.result.geometry
    //set the destination
    setDestination({
      latitude: location.lat,
      longitude: location.lng
    })
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
          {destination && 
            <Marker
              coordinate={destination}
              title={"Current Location"}
            />
          }
        </MapView>
      }
      <Container>
        <SimpleText>
          Alo Djimmy Poliard,
        </SimpleText>
        <RequestText>
          Ki kote ou vle ale kounyea?
        </RequestText>
      </Container>
      <GooglePlacesAutocomplete
        ref={ref}
        placeholder='Antre kote ou vle ale a la'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          getPlaceId(details)
          // console.log(data, details);
        }}
        query={{
          key: `${API_KEY}`,
          language: 'en',
        }}
        styles={{
          container: {
            height: 100,
            flex: 1,
            backgroundColor: "#fff",
            paddingHorizontal: 15
          },
          textInputContainer: {
            borderRadius: 10,
            shadowColor: "#171a23be",
            shadowOffset: {
              width: 1,
              height: 1,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
          },
          textInput: {
            height: 48,
            color: "#171a23ff",
            fontSize: 16,
            borderWidth: 0.5,
            borderColor: "rgba(0,0,0,0.1)",
            padding: 20,
            borderRadius: 10,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />

      {/* 
      <RequestContainer>
        <SimpleText>
          kjhfaksk
        </SimpleText>
      </RequestContainer> */}


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
  padding: 15px;
  backgroundColor: ${props => props.theme.colors.white}; 
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


const SimpleText = styled.Text`
  font-family: ${props => props.theme.font.regular};
  font-size: 17px;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 5px;
`;

const RequestText = styled.Text`
  font-family: ${props => props.theme.font.semiBold};
  color: ${props => props.theme.colors.primary};
  font-size: 18px;
`;

const LocationContainer = styled.View`
  padding: 15px;
  flex: 1;
  flex-direction: column;

`;