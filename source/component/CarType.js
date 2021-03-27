import React from 'react'
import { Dimensions, FlatList, View, Text, Pressable } from 'react-native'
import SingleType from './SingleType'
import Icons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window')

const CarType =()=> {

    const list = [1, 2, 3] 
    const uberType = [{id:1, name:'UberX', image:'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/taxiClone%2FUberX.jpeg?alt=media&token=64505375-9f34-4c94-9de3-f2dffff80f18'},
        {id:2, name:'Comfort', image:'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/taxiClone%2FComfort.jpeg?alt=media&token=443f9fdb-b01e-448f-9573-a07093cd50de'},
        {id:3, name:'UberXL', image: 'https://firebasestorage.googleapis.com/v0/b/merchant-admin.appspot.com/o/taxiClone%2FUberXL.jpeg?alt=media&token=6a3e3614-f8fe-4adc-9ba3-c4c02dad359e'}]

    return(
        <View style={{width:width, padding:8, backgroundColor:'white'}}>
        <View style={{width:'20%', borderRadius:20, backgroundColor:'gray', height:4, alignSelf:'center',marginVertical:12}}/>
        
            <FlatList
                data={uberType}
                keyExtractor={x=>x.id.toString()}
                renderItem={({item}) => {
                    return<SingleType
                        item = {item}
                    />
                }}
            />

            <Pressable style={{backgroundColor:'black', width:width*0.8, alignItems:'center', alignSelf:'center',padding:8, margin:8}}>
                <Text style={{fontWeight:'bold', fontSize:20, color:'white'}}>Confirm Uber</Text>
            </Pressable>

        </View>
    )

}

export default CarType