import React from 'react'
import { Dimensions, View, Text, Image } from 'react-native'
import Icons from 'react-native-vector-icons/MaterialIcons';

const {width, height} = Dimensions.get('window')

const SingleType = ({item}) => {

    return(
        <View style={{width:width*0.9, flexDirection:'row', backgroundColor:'white', padding:8, justifyContent:'space-between', marginVertical:4, borderBottomWidth:1, borderBottomColor:'#ebeaeb'}}>
            
            <View style={{flexDirection:'row'}}>
            <Image
                source={{uri:item.image}}
                style={{height:50, width:100}}
            />
            <View style={{alignSelf:'center', justifyContent:'center', marginHorizontal:4}}>
                <Text style={{fontWeight:'bold', fontSize:20}}>{item.name}</Text>
                <Text style={{fontWeight:'normal', fontSize:16}}>8:03pm dropoff</Text>
            </View>
            </View>

            <View style={{alignSelf:'center',marginHorizontal:3, flexDirection:'row'}}>
                <Text style={{fontWeight:'bold', fontSize:20}}>est ₹200</Text>
                <Icons name="local-offer" size={15} color="green" style={{alignSelf:'center'}} />
            </View>
            
        </View>
    )

}

export default SingleType