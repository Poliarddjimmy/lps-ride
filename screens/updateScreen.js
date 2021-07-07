import React from "react"
import {SafeAreaView, StyleSheet, View, Text} from 'react-native';

// local import
import Layout from '../components/layout/layout';

const UpdateScreen = ({navigation}) => {
  return (
    
    <Layout navigation={navigation}>
      <View>
        <View style={styles.bottomView}>
          <Text style={styles.textStyle}>Bottom View</Text>
        </View>
      </View>
    </Layout>
  );
}
export default UpdateScreen
const styles = StyleSheet.create({
  
  bottomView: {
    width: '100%',
    height: 50,
    backgroundColor: '#EE5407',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute', //Here is the trick
    bottom: 0, //Here is the trick
  },
  textStyle: {
    color: '#fff',
    fontSize: 18,
  },
});