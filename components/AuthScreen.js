import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const AuthScreen = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('http://your_server_ip:5000/api/auth/login', { username, password });
            Alert.alert('Login Successful', 'Welcome back!');
            navigation.navigate('BookList');
        } catch (error) {
            Alert.alert('Login Failed', 'Invalid credentials');
        }
    };

    const handleRegister = async () => {
        try {
            await axios.post('http://your_server_ip:5000/api/auth/register', { username, password });
            Alert.alert('Registration Successful', 'You can now log in.');
        } catch (error) {
            Alert.alert('Registration Failed', error.response.data.message);
        }
    };

    return (
        <View>
            <TextInput placeholder="Username" onChangeText={setUsername} />
            <TextInput placeholder="Password" secureTextEntry onChangeText={setPassword} />
            <Button title="Login" onPress={handleLogin} />
            <Button title="Register" onPress={handleRegister} />
        </View>
    );
};

export default AuthScreen;
``
