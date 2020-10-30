import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

import firebase from 'firebase';
import 'firebase/auth';

export default function Login() {
    const navigation = useNavigation();

    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();

    function loginEmailSenha() {

        try {
            if (email.length < 5 && senha.length < 4) {
                Alert.alert("Credenciais invalidas");
            } else {
                firebase.auth().signInWithEmailAndPassword(email, senha).then(resultado => {
                    navigation.navigate('Home')
                });
            }
        } catch (error) {
            Alert.alert("Erro ao logar!");
            console.log(erro);
        }
    }

    state = {
        signedIn: false,
        name: '',
        photoUrl: '',
    };

    return (
        <View style={styles.container}>

            <Image source={require('../../../assets/icon.png')}
                style={styles.logo} />

            <TextInput
                style={styles.input}
                placeholder="Email"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoCapitalize="none"
                autoCompleteType="email"
                autoCorrect={false}
                onChangeText={email => setEmail(email)}
            />

            <TextInput
                style={styles.input}
                placeholder="Senha"
                //keyboardType="visible-password"
                textContentType="password"
                autoCapitalize="none"
                autoCompleteType="password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={senha => setSenha(senha)}
            />

            <TouchableOpacity
                style={styles.botao}
                onPress={loginEmailSenha}
            >
                <Text style={styles.botaoText}>Acessar</Text>
            </TouchableOpacity>

        </View>
    );
}