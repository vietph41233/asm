import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import axios from 'axios';

const LoanTicketScreen = () => {
  const [bookId, setBookId] = useState('');
  const [userId, setUserId] = useState('');

  const handleCreateLoanTicket = async () => {
    try {
      const response = await axios.post('http://192.168.46.105:5000/api/loans', {
        bookId,
        userId
      });
      if (response.data.success) {
        Alert.alert('Success', 'Loan ticket created successfully');
      } else {
        Alert.alert('Error', 'Failed to create loan ticket');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text>Book ID</Text>
      <TextInput value={bookId} onChangeText={setBookId} style={{ borderBottomWidth: 1 }} />
      <Text>User ID</Text>
      <TextInput value={userId} onChangeText={setUserId} style={{ borderBottomWidth: 1 }} />
      <Button title="Create Loan Ticket" onPress={handleCreateLoanTicket} />
    </View>
  );
};

export default LoanTicketScreen;
