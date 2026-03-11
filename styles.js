import { StyleSheet } from 'react-native';

// Definição de cores padrão para facilitar a manutenção
const cores = {
    fundo: '#121212',
    card: '#1e1e1e',
    roxoPrincipal: '#552b91',
    roxoClaro: '#9063cf',
    textoBranco: '#ffffff',
    textoCinza: '#aaaaaa',
    borda: '#333333',
    // Adicionadas para manter a coerência nos resultados
    sucesso: '#4CAF50', 
    destaqueAzul: '#2196F3',
};

export const styles = StyleSheet.create({
    // --- ESTILOS COMPARTILHADOS ---
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: cores.fundo,
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        textAlign: 'center',
        color: cores.textoBranco,
    },
    input: {
        backgroundColor: cores.card,
        padding: 15,
        borderRadius: 8,
        fontSize: 18,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: cores.borda,
        color: cores.textoBranco,
    },
    label: {
        fontSize: 16,
        fontWeight: '600',
        marginBottom: 10,
        color: cores.textoCinza
    },
    footer:{
        backgroundColor: cores.roxoPrincipal,
        padding: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 10,  
        color: cores.textoBranco,
        fontSize: 18,
        fontWeight: 'bold',
    },
    // --- CALCULADORA IMC ---
    resultBox: {
        backgroundColor: cores.card, // Alterado para combinar com o fundo dark
        padding: 20,
        borderRadius: 12,
        alignItems: 'center',
        marginBottom: 30,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        borderWidth: 1,
        borderColor: cores.borda,
    },
    labelResultado: {
        fontSize: 16,
        color: cores.textoCinza,
    },
    valorResultado: {
        fontSize: 48,
        fontWeight: 'bold',
        color: cores.roxoClaro, // Usando o seu roxo claro para destaque
    },
    classificacao: {
        fontSize: 20,
        fontWeight: '500',
        color: cores.textoBranco,
        marginTop: 5,
    },

    // --- CALCULADORA SALÁRIO ---
    resultContainer: {
        marginTop: 30,
        padding: 20,
        backgroundColor: cores.card,
        borderRadius: 8,
        borderLeftWidth: 4,
        borderLeftColor: cores.destaqueAzul,
    },
    resultText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: cores.destaqueAzul,
        textAlign: 'center',
    },

    // --- SIMULADOR PEDÁGIO ---
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    typeButton: {
        flex: 1,
        padding: 10,
        borderWidth: 1,
        borderColor: cores.borda,
        marginHorizontal: 5,
        borderRadius: 8,
        alignItems: 'center',
        backgroundColor: cores.card,
    },
    selectedButton: {
        backgroundColor: cores.sucesso,
        borderColor: cores.sucesso,
    },
    buttonText: {
        color: cores.textoCinza,
    },
    selectedText: {
        color: cores.textoBranco,
        fontWeight: 'bold',
    },
    subText: {
        fontSize: 14,
        color: cores.textoCinza,
    }
});