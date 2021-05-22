import React from 'react'
import {View, StyleSheet, TouchableHighlight, Text, Alert} from 'react-native'

export default function Toque(){

    return(
        <View>
            <TouchableHighlight style={style.botao} onPress={()=>Alert.alert('Mensagem', 'Teste do play')}>
                <Text>Play</Text>
            </TouchableHighlight>
        </View>
    )
}

const style = StyleSheet.create({
    botao:{
        backgroundColor:'#ccc',
        padding:20,
        borderRadius:30,
        top:50,
    }
})