import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, TextInput, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

export default function SimuladorCobrancaLuzScreen({ navigation }) {
    const [consumo, setConsumo] = useState('');
    const [bandeira, setBandeira] = useState(null);
    const [total, setTotal] = useState(null);

    // Mapeamento das tarifas por bandeira
    const tarifas = {
        'Verde': { valor: 0.50, cor: '#4CAF50' },
        'Amarela': { valor: 0.55, cor: '#FFEB3B' },
        'Vermelha 1': { valor: 0.60, cor: '#F44336' },
        'Vermelha 2': { valor: 0.70, cor: '#B71C1C' },
    };

    const calcularConta = () => {
        const kwh = parseFloat(consumo);

        if (!bandeira || isNaN(kwh) || kwh <= 0) {
            alert("Por favor, informe o consumo e selecione uma bandeira.");
            return;
        }

        const valorKwh = tarifas[bandeira].valor;
        const resultado = kwh * valorKwh;
        setTotal(resultado.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Simulador de Conta de Luz</Text>

            <Text style={styles.label}>Consumo mensal (kWh):</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: 250"
                keyboardType="numeric"
                value={consumo}
                onChangeText={setConsumo}
            />

            <Text style={styles.label}>Selecione a Bandeira:</Text>
            <View style={stylesLayout.gridBandeiras}>
                {Object.keys(tarifas).map((nome) => (
                    <TouchableOpacity
                        key={nome}
                        style={[
                            stylesLayout.cardBandeira,
                            { borderColor: tarifas[nome].cor },
                            bandeira === nome && { backgroundColor: tarifas[nome].cor }
                        ]}
                        onPress={() => setBandeira(nome)}
                    >
                        <Text style={[
                            stylesLayout.textBandeira,
                            bandeira === nome && stylesLayout.textSelected
                        ]}>
                            {nome}
                        </Text>
                    </TouchableOpacity>
                ))}
            </View>

            <Button title="Calcular Fatura" onPress={calcularConta} color="#2196F3" />

            {total !== null && (
                <View style={styles.resultContainer}>
                    <Text style={styles.resultadoTitulo}>Resumo da Fatura</Text>
                    <Text style={styles.resultadoValor}>R$ {total}</Text>
                    <Text style={styles.resultadoSub}>Tarifa aplicada: R$ {tarifas[bandeira].valor}/kWh</Text>
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
   
    gridBandeiras: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 25,
    },
    cardBandeira: {
        width: '48%',
        padding: 15,
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
        backgroundColor: '#a8a8a8'        
    },
    textBandeira: {
        fontWeight: 'bold',
        fontSize: 14,
    },
    textSelected: {
        color: '#fff',
    },
    resultadoContainer: {
        marginTop: 30,
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        borderLeftWidth: 5,
        borderLeftColor: '#2196F3',
    },
    resultadoTitulo: {
        fontSize: 16,
        color: '#666',
    },
    resultadoValor: {
        fontSize: 32,
        fontWeight: 'bold',
        color: '#000',
        marginVertical: 5,
    },
    resultadoSub: {
        fontSize: 12,
        color: '#888',
    }
});