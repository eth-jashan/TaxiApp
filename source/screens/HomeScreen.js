import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import CovidBox from '../component/CovidBox'
import MapViews from '../component/MapView'
import SearchBox from '../component/SearchBox'

const HomeScreen = ({navigation}) => {

    return(
        
        <SafeAreaView style={{backgroundColor:'white', height:Dimensions.get('window').height}}>
        <MapViews/>
        <CovidBox/>
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
        <SearchBox/>
        </TouchableOpacity>
        </SafeAreaView>
    )

}
export default HomeScreen