import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post('http://<server-url>/api/users/register', {
        name,
        email,
        password
      });
      if (response.data.success) {
        Alert.alert('Success', 'User registered successfully');
        navigation.navigate('Login');
      } else {
        Alert.alert('Error', 'Registration failed. Please try again.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Name</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderBottomWidth: 1 }} />
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderBottomWidth: 1 }} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} style={{ borderBottomWidth: 1 }} secureTextEntry />
      <Button title="Register" onPress={handleRegister} />
      <Button title="Go to Login" onPress={() => navigation.navigate('Login')} />
    </View>
  );
};

export default RegisterScreen;
