import React from 'react';
import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Linking, Image } from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
export default function HomeScreen({ navigation }) {
    
    // Funções para abrir links externos
    const abrirLink = (url) => {
        Linking.openURL(url);
    };

    return (
        <View style={estilos.container}>
            {/* Cabeçalho com "Foto" ou Avatar */}
            <View style={estilos.perfilContainer}>
                {/* Substituímos a View/Text pela Image */}
                <Image 
                    source={{ uri: 'data:image/jpeg;base64,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' }} 
                    style={estilos.avatar} 
                />
                <Text style={estilos.nome}>Ana Julia Reis de Mattos</Text>
            </View>

            {/* Seção de Links */}
            <View style={estilos.linksContainer}>
                
                <TouchableOpacity 
                    style={estilos.botao} 
                    onPress={() => abrirLink('https://github.com/najumattos')}
                >
                    <FontAwesome name="github" size={24} color="#fff" />
                    <Text style={estilos.textoBotao}>GitHub</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[estilos.botao, { backgroundColor: '#0077B5' }]} 
                    onPress={() => abrirLink('https://www.linkedin.com/in/anajuliamattos/')}
                >
                    <FontAwesome name="linkedin" size={24} color="#fff" />
                    <Text style={estilos.textoBotao}>LinkedIn</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={[estilos.botao, { backgroundColor: '#db4437' }]} 
                    onPress={() => abrirLink('mailto:anareismattos.dev@gmail.com')}
                >
                    <MaterialCommunityIcons name="email" size={24} color="#fff" />
                    <Text style={estilos.textoBotao}>E-mail</Text>
                </TouchableOpacity>

            </View>          
        </View>
    );
}

const estilos = StyleSheet.create({
    avatar: {
        width: 100,  // Defina a largura
        height: 100, // Defina a altura
        borderRadius: 50, // Para ficar redonda
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    container: {        
        flex: 1,
        backgroundColor: '#221927', // Dark mode
        padding: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    perfilContainer: {
        alignItems: 'center',
        marginBottom: 40,
    },
    avatarPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        backgroundColor: '#552b91',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 15,
        borderWidth: 2,
        borderColor: '#fff',
    },
    avatarTexto: {
        fontSize: 40,
        color: '#c4bdcf',
        fontWeight: 'bold',
    },
    nome: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#fff',
    },
    subtitulo: {
        fontSize: 14,
        color: '#aaa',
        marginTop: 5,
    },
    linksContainer: {
        width: '100%',
        gap: 15,
    },
    botao: {
        flexDirection: 'row',
        backgroundColor: '#333',
        padding: 15,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    },
    textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    exerciciosContainer: {
        marginTop: 40,
        width: '100%',
        borderTopWidth: 1,
        borderTopColor: '#333',
        paddingTop: 20,
    },
    tituloExercicios: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    linkExercicio: {
        padding: 10,
    },
    textoLink: {
        color: '#6200ee',
        fontWeight: 'bold',
    }
    
});