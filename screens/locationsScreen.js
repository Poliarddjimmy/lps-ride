import React from "react"
import { Text, View, TouchableOpacity } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';


const LocationsScreen = () => {



  return (



    <GooglePlacesAutocomplete
        placeholder='Search'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: "AIzaSyCZf5OAGwyADLuVnQZ-umuV4C0tOS4nFxc",
          language: 'en',
        }}
      />

    // <View style={{ paddingTop: 35, flex: 1 }}>
    //     <GooglePlacesAutocomplete
    //       placeholder="Search"
    //       minLength={2} // minimum length of text to search
    //       autoFocus={false}
    //       returnKeyType={'search'} // Can be left out for default return key https://facebook.github.io/react-native/docs/textinput.html#returnkeytype
    //       listViewDisplayed="auto" // true/false/undefined
    //       fetchDetails={true}
    //       renderDescription={row => row.description} // custom description render
    //       onPress={(data, details = null) => {
    //         console.log('data',data);
    //         console.log('details',details);
    //       }}
    //       getDefaultValue={() => {
    //         return ''; // text input default value
    //       }}
    //       query={{
    //         // available options: https://developers.google.com/places/web-service/autocomplete
    //         key: 'AIzaSyCUQoLbBsZz1WWOIQKro8Kx8rzZuZyRPyo',
    //         language: 'en', // language of the results
    //       }}
    //       styles={{
    //         description: {
    //           fontWeight: 'bold',
    //         },
    //         predefinedPlacesDescription: {
    //           color: '#1faadb',
    //         },
    //       }}
    //       //currentLocation={true} // Will add a 'Current location' button at the top of the predefined places list
    //       currentLocationLabel="Current location"
    //       nearbyPlacesAPI="GooglePlacesSearch" // Which API to use: GoogleReverseGeocoding or GooglePlacesSearch
    //       GoogleReverseGeocodingQuery={{
    //         // available options for GoogleReverseGeocoding API : https://developers.google.com/maps/documentation/geocoding/intro
    //       }}
    //       GooglePlacesSearchQuery={{
    //         // available options for GooglePlacesSearch API : https://developers.google.com/places/web-service/search
    //         rankby: 'distance',
    //       }}
    //       // filterReverseGeocodingByTypes={[
    //       //   'locality',
    //       // ]} // filter the reverse geocoding results by types - ['locality', 'administrative_area_level_3'] if you want to display only cities
    //       debounce={200}
    //     />
      // </View>

  );
}
export default LocationsScreen