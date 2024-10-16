import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://<server-url>/api/users/login', {
        email,
        password
      });
      if (response.data.success) {
        // Chuyển hướng đến màn hình BookList sau khi đăng nhập thành công
        navigation.navigate('BookList');
      } else {
        Alert.alert('Error', 'Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Email</Text>
      <TextInput value={email} onChangeText={setEmail} style={{ borderBottomWidth: 1 }} />
      <Text>Password</Text>
      <TextInput value={password} onChangeText={setPassword} style={{ borderBottomWidth: 1 }} secureTextEntry />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Go to Register" onPress={() => navigation.navigate('Register')} />
    </View>
  );
};

export default LoginScreen;
