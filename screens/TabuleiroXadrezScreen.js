import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { styles } from '../styles';

export default function TabuleiroXadrezScreen({ navigation }) {
    const tamanho = 4; // Tabuleiro 4x4
    const linhas = Array.from({ length: tamanho });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Tabuleiro Xadrez 4x4</Text>

            <View style={stylesXadrez.tabuleiro}>
                {linhas.map((_, i) => (
                    <View key={`linha-${i}`} style={stylesXadrez.linha}>
                        {linhas.map((_, j) => {
                            // Lógica para alternar as cores: 
                            // Se a soma do índice da linha + coluna for par, é branco. Se ímpar, preto.
                            const ehPreto = (i + j) % 2 !== 0;
                            return (
                                <View 
                                    key={`celula-${i}-${j}`} 
                                    style={[
                                        stylesXadrez.quadrado, 
                                        { backgroundColor: ehPreto ? '#333' : '#fff' }
                                    ]} 
                                />
                            );
                        })}
                    </View>
                ))}
            </View>   

            <View style={styles.footer}>
                <Button color="#2195f300"
                    title="Voltar para Home" 
                    onPress={() => navigation.navigate('Home')} 
                />
            </View>
            </View>
    
    );
}

const stylesXadrez = StyleSheet.create({
    tabuleiro: {        
        border: 2,
        borderColor: '#333',
        // Garantindo que o tabuleiro seja um quadrado perfeito
        width: 280,
        height: 280,
    },
    linha: {
        flex: 1,
        flexDirection: 'row',
    },
    quadrado: {
        flex: 1, // Cada quadrado ocupa o mesmo espaço na linha
    }
});