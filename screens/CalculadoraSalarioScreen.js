import { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { styles } from '../styles';

export default function CalculadoraSalarioScreen({ navigation }) {
    const [salarioBase, setSalarioBase] = useState('');
    const [horasTrabalhadas, setHorasTrabalhadas] = useState('');
    const [resultado, setResultado] = useState(null);

    const calcularSalario = () => {
        const sb = parseFloat(salarioBase);
        const ht = parseFloat(horasTrabalhadas);
        const JORNADA_NORMAL = 160;

        if (isNaN(sb) || isNaN(ht)) {
            alert("Por favor, insira valores válidos.");
            return;
        }

        const valorHoraNormal = sb / JORNADA_NORMAL;
        let salarioFinal = 0;

        if (ht > JORNADA_NORMAL) {
            const horasExtras = ht - JORNADA_NORMAL;
            const valorHoraExtra = valorHoraNormal * 1.5;
            salarioFinal = sb + (horasExtras * valorHoraExtra);
        } else {
            // Se trabalhou menos que 160h, calculamos proporcionalmente
            salarioFinal = ht * valorHoraNormal;
        }

        setResultado(salarioFinal.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de Salário</Text>

            <TextInput
                style={styles.input}
                placeholder="Salário Base (Ex: 2000)"
                keyboardType="numeric"
                value={salarioBase}
                onChangeText={setSalarioBase}
            />

            <TextInput
                style={styles.input}
                placeholder="Total de Horas (Ex: 170)"
                keyboardType="numeric"
                value={horasTrabalhadas}
                onChangeText={setHorasTrabalhadas}
            />

            <Button title="Calcular" onPress={calcularSalario} color="#2196F3" />

            {resultado && (
                <View style={styles.resultContainer}>
                    <Text style={styles.salarioResultText}>Salário Final: R$ {resultado}</Text>
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
