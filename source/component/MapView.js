import React from 'react'
import { StyleSheet, View, Dimensions, Text, Image } from 'react-native'
import MapView, { PROVIDER_GOOGLE ,Marker} from 'react-native-maps';
import cars from '../../dummyData/cars'

const {width, height} = Dimensions.get('window') 

const MapViews = () => {

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
        {cars.map((car) => (
        <Marker
          key={car.id}
          coordinate={{latitude: car.latitude, longitude: car.longitude}}
        >
          <Image
            style={{
              width: 70,
              height: 70,
              resizeMode: 'contain',
            }}
            source={{uri:car.carImage}}
          />
        </Marker>
      ))}
        
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

export default MapViews