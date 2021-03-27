import React from 'react'
import { Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import CarType from '../component/CarType'
import RouteView from '../component/RouteView'

const {width, height} = Dimensions.get('window')

const CarSelection = () => {

    return(
    <SafeAreaView style={{flex:1, backgroundColor:'white'}}>

        <RouteView/>
        <CarType/>

    </SafeAreaView>
    )

}

export default CarSelection
