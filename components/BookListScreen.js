import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import axios from 'axios';

const BookListScreen = ({ navigation }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await axios.get('http://<server-url>/api/books');
        setBooks(response.data.books);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBooks();
  }, []);

  return (
    <View>
      <FlatList
        data={books}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={{ padding: 10, borderBottomWidth: 1 }}>
            <Text>{item.title}</Text>
            <Text>Author: {item.author}</Text>
          </View>
        )}
      />
      <Button title="Create Loan Ticket" onPress={() => navigation.navigate('LoanTicket')} />
    </View>
  );
};

export default BookListScreen;
