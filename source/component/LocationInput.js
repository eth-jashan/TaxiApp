import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { useState, useEffect } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const {width, height} = Dimensions.get('window')

const LocationInput = () => {

    const navigation = useNavigation();
    const [current, setCurrent] = useState(null)
    const [destination, setDestination] = useState(null)    

    useEffect(()=>{
        if(current && destination){
            navigation.navigate('Selection')
        }
    },[current, destination])
    

    return(
       
        <View style={styles.containerStyle}>

           <View style={{height:height/3}}>
            <GooglePlacesAutocomplete
            fetchDetails={true}
            textInputProps={{placeholderTextColor:'black'}}
                styles={
                    {
                        textInputContainer:{
                            backgroundColor:'grey',
                            height: 50,
                            borderRadius:5,
                            width:width*0.9    
                        },
                        textInput: {
                                backgroundColor:'#e9e6e9',
                                height: 50,
                                color: '#5d5d5d',
                                fontSize: 16,
                                width:width*0.9
                            },
                    }
                }
                placeholder='From ?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setCurrent({value:{data, details}})
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyDsDKH-37DS6ZnGY_oIi7t5YE0oAAZ-V88',
                    language: 'en',
                }}
            />
            </View>

            <View>
            <GooglePlacesAutocomplete
                textInputProps={{placeholderTextColor:'black'}}
                styles={
                    {
                        textInputContainer:{
                            backgroundColor:'grey',
                            height: 50,
                            borderRadius:5,
                            width:width*0.9    
                        },
                        textInput: {
                                backgroundColor:'#e9e6e9',
                                height: 50,
                                color: '#5d5d5d',
                                fontSize: 16,
                                width:width*0.9
                            },
                    }
                }
                placeholder='Where to?'
                onPress={(data, details = null) => {
                    // 'details' is provided when fetchDetails = true
                    setDestination({data, details})
                    console.log(data, details);
                }}
                query={{
                    key: 'AIzaSyDsDKH-37DS6ZnGY_oIi7t5YE0oAAZ-V88',
                    language: 'en',
                }}
            />
            </View>
           
           
            
        </View>
        
    )

}

const styles = StyleSheet.create({
    
    containerStyle:{
        width:width,
        alignItems:'center',
        paddingVertical:8
    },
    textInput:{
        width:width*0.9,
        padding:4,
        backgroundColor:'#e9e6e9',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:4
    }

})

export default LocationInput