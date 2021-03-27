import React from 'react'
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
import cars from '../../dummyData/cars'
import MapViewDirections from 'react-native-maps-directions';

const {width, height} = Dimensions.get('window') 

const RouteView = () => {

    const origin = {latitude: 28.450627, longitude: -16.263045}
    const destination = {latitude: 28.450127, longitude: -16.29045}
    const GOOGLE_API_KEY = 'AIzaSyDsDKH-37DS6ZnGY_oIi7t5YE0oAAZ-V88'

    return(
        <View style={styles.boxStyle}>
        
        <MapView
            provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={{width:'100%', height:'100%'}}
            region={{
                latitude: 28.450627,
                longitude: -16.263045,
                latitudeDelta: 0.0222,
                longitudeDelta: 0.0121,
            }}>
            <MapViewDirections
            origin={origin}
            destination={destination}
            apikey={GOOGLE_API_KEY}
            strokeWidth={3}
            strokeColor="black"
        />
        
        </MapView>

        

        </View>
    )

}

const styles = StyleSheet.create({
    boxStyle:{
        width:width,
        height:height*0.50,
        backgroundColor:'#a1aff5'
    }
})

export default RouteView