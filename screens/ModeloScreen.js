import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function ModeloScreen({ navigation }) {    
      //JS AQUI
const [value, setValue] = useState('');
    const [total, setTotal] = useState(null);

    const calcular = () => {
       // Calculos
      var total = 10;
       return setTotal(total)
       
    };

      
    return (
        //HTML AQUI
        <View style={styles.container}>            
            <Text style={styles.title}>TITULO</Text>

            <Text style={styles.label}>LABEL</Text>
                       <TextInput
                           style={styles.input}
                           placeholder="PLACEHOLDER"
                           keyboardType="numeric"
                           value={value}
                           onChangeText={setValue}
                       />

            <Button title="Calcular" onPress={calcular} color="#2196F3" />

                 {total !== null && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultadoTitulo}>TITULO</Text>
                    <Text style={styles.resultadoValor}>VALOR {total}</Text>
                    <Text style={styles.resultadoSub}>RESULTADO </Text>
                </View>
                 )}
  
                   <View style={styles.footer}>
                <Button color="#2195f300"
                    title="Voltar para Home" 
                    onPress={() => navigation.navigate('Home')} 
                />
            </View>
        </View>
    );
}

const stylesLayout = StyleSheet.create({
   //css
});