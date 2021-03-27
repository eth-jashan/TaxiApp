import React from 'react'
import { Dimensions, StyleSheet, View, Text } from 'react-native'
const {width, height} = Dimensions.get('window') 

const CovidBox = () => {

    

    return(
        <View style={styles.boxSyle}>
            <Text style={styles.titleStyle}>Travel only if neccesary</Text>
            <Text style={styles.bodyStyle}>Help flatten the curve. Coronavirus has made us aware that if we want to survive, we have to fight the virus together. Let us join hands.</Text>
            <Text style={{fontWeight:'bold', color:'white', fontSize:16}}>Learn more.</Text>
        </View>
    )

}

const styles = StyleSheet.create({
    boxSyle:{
        width:width,
        padding:10,
        backgroundColor:'#3c6fdf',
        borderTopRightRadius:12,
        borderTopLeftRadius:12
    },
    titleStyle:{
        fontWeight:'bold',
        color:'white', 
        fontSize:20
    },
    bodyStyle:{
        fontWeight:'normal', 
        color:'#bed9ff', 
        fontSize:14, marginVertical:8
    },

})

export default CovidBox