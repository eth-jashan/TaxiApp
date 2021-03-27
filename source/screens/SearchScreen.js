import React from 'react'
import { View, Text, Dimensions } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import LocationInput from '../component/LocationInput'


const SearchScreen = () => {

    return(
        <SafeAreaView style={{backgroundColor:'white', height:Dimensions.get('window').height}}>
        <LocationInput/>
        </SafeAreaView>
    )

}
export default SearchScreen