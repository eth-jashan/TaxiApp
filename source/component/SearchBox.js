import React from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/Foundation';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window') 

const SearchBox = () => {

    const navigation = useNavigation();

    return(
        
        <View style={styles.boxStyle}>

        <View style={{width:'20%', borderRadius:20, backgroundColor:'gray', height:4, alignSelf:'center',marginVertical:12}}/>
           
            <View style={styles.textInput}>
                
                <Text style={styles.textSyle}>Where to?</Text>
                
                <View style={{width:'30%', backgroundColor:'white', padding:5, borderRadius:18, flexDirection:'row',justifyContent:'space-evenly'}}>
                <Icon name="time" size={20} color="black" />
                <Text style={{alignSelf:'center'}}>Now</Text>
                <Icon name="chevron-down-outline" size={20} color="black" />
                </View>

            </View>
         
            <View style={{width:width*0.95, padding:10, marginTop:8, flexDirection:'row',borderBottomWidth:1, borderColor:'#e9e6e9', alignSelf:'center'}}>
                <View style={{padding:4, borderRadius:50, backgroundColor:'#999699',width:35, justifyContent:'center'}}>
                <Icon style={{alignSelf:'center'}} name="time" size={25} color="white" />
                </View>
                <Text style={{fontWeight:'900', fontSize:20, alignSelf:'center', marginHorizontal:16}}>Spin Nightclub</Text>
            </View>
            <View style={{width:width*0.95, padding:10,  flexDirection:'row',borderBottomWidth:1, borderColor:'#e9e6e9', alignSelf:'center'}}>
                <View style={{padding:4, borderRadius:50, backgroundColor:'#3c6fdf',width:35, justifyContent:'center'}}>
                <Icons style={{alignSelf:'center'}} name="home" size={25} color="white" />
                </View>
                <Text style={{fontWeight:'900', fontSize:20, alignSelf:'center', marginHorizontal:16}}>Home</Text>
            </View>

        </View>
    )

}

const styles = StyleSheet.create({
    boxStyle:{
        width:width,
        padding:10,
        backgroundColor:'white',
    },
    textInput:{
        width:width*0.95,
        padding:8,
        backgroundColor:'#e9e6e9',
        alignSelf:'center',
        flexDirection:'row',
        justifyContent:'space-between'
        
    },
    textSyle:{
        fontSize:22,
        color:'black',
        fontWeight:'normal',
        alignSelf:'center'
    }
})

export default SearchBox