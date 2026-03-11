import { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
export default function SimuladorPedagioScreen({ navigation }) {
    const [distancia, setDistancia] = useState('');
    const [tipoVeiculo, setTipoVeiculo] = useState(null);
    const [total, setTotal] = useState(null);

    // Mapeamento de preços por tipo
    const precos = {
        Carro: 0.10,
        Moto: 0.05,
        Caminhao: 0.15
    };

    const calcularPedagio = () => {
        const d = parseFloat(distancia);

        if (!tipoVeiculo || isNaN(d) || d <= 0) {
            alert("Selecione um veículo e insira uma distância válida.");
            return;
        }

        const valorKm = precos[tipoVeiculo];
        const resultado = d * valorKm;
        setTotal(resultado.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Simulador de Pedágio</Text>

            <Text style={styles.label}>Selecione o Veículo:</Text>
            <View style={styles.buttonGroup}>
                {Object.keys(precos).map((tipo) => (
                    <TouchableOpacity 
                        key={tipo}
                        style={[styles.typeButton, tipoVeiculo === tipo && styles.selectedButton]}
                        onPress={() => setTipoVeiculo(tipo)}
                    >
                        <Text style={tipoVeiculo === tipo ? styles.selectedText : styles.buttonText}>
                            {tipo}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <TextInput
                style={styles.input}
                placeholder="Distância percorrida (km)"
                keyboardType="numeric"
                value={distancia}
                onChangeText={setDistancia}
            />

            <Button title="Calcular Total" onPress={calcularPedagio} color="#2196F3" />

            {total !== null && (
                <View style={styles.resultBox}>
                    <Text style={styles.resultText}>Total a pagar: R$ {total}</Text>
                    <Text style={styles.subText}>Veículo: {tipoVeiculo}</Text>
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
