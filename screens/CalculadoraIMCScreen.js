import { useState } from 'react';
import { View, Text, Button, TextInput, TouchableOpacity, Keyboard } from 'react-native';
import { styles } from '../styles';

export default function CalculadoraIMCScreen({ navigation }) {
    const [peso, setPeso] = useState('');
    const [altura, setAltura] = useState('');
    const [resultado, setResultado] = useState(null);
    const [classificacao, setClassificacao] = useState('');

    const calcularIMC = () => {
        // Substituindo vírgula por ponto para evitar erros de cálculo
        const p = parseFloat(peso.replace(',', '.'));
        const a = parseFloat(altura.replace(',', '.'));

        if (isNaN(p) || isNaN(a) || a <= 0) {
            alert("Insira valores válidos para peso e altura.");
            return;
        }

        const imc = p / (a * a);
        setResultado(imc.toFixed(1));

        // Lógica de classificação
        if (imc < 18.5) setClassificacao('Abaixo do peso');
        else if (imc < 25) setClassificacao('Peso normal');
        else if (imc < 30) setClassificacao('Sobrepeso');
        else setClassificacao('Obesidade');

        Keyboard.dismiss(); // Fecha o teclado após calcular
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Calculadora de IMC</Text>

            <TextInput
                style={styles.input}
                placeholder="Peso (ex: 70.5)"
                keyboardType="numeric"
                value={peso}
                onChangeText={setPeso}
            />

            <TextInput
                style={styles.input}
                placeholder="Altura (ex: 1.75)"
                keyboardType="numeric"
                value={altura}
                onChangeText={setAltura}
            />
 <Button title="Calcular" onPress={calcularIMC} color="#2196F3" />
           

            {resultado && (
                <View style={styles.resultBox}>
                    <Text style={styles.labelResultado}>Seu IMC é:</Text>
                    <Text style={styles.valorResultado}>{resultado}</Text>
                    <Text style={styles.classificacao}>{classificacao}</Text>
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