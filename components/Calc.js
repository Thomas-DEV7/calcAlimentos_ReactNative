import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Calc(props){
    let refri = (props.conv * 600);
    let agua = (props.conv * 200);
    let bolo = (props.conv * 100);
    let doces = (props.conv * 3);
    let salg =  (props.conv * 10);
    return (
        <Text style={styles.texto}>
            Refrigerante: {refri} ml {"\n"}
            Água: {agua} ml {"\n"}
            Bolo: {bolo} g {"\n"}
            Doces: {doces} Unidades {"\n"}
            Salgadinhos: {salg} Unidades
        </Text>
    )
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 30
    }
});

