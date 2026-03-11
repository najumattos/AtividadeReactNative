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
                    source={{ uri: 'https://avatars.githubusercontent.com/u/198278983?s=96&v=4' }} 
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