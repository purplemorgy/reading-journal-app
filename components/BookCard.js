import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function BookCard({ status , bookTitle, bookAuthor}) {
  return (
    <View style={styles.bookCard}>
      <View style={styles.bookImage} />
      <View style={styles.bookDetails}>
        <Text style={styles.bookTitle}>{bookTitle}</Text>
        <Text style={styles.bookAuthor}>{bookAuthor}</Text>
        
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bookCard: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    marginTop: 12,
    padding: 10,
    borderRadius: 12,
    borderColor: '#f6f3fc',
    
    borderWidth: 1,
    shadowRadius: 3,
    elevation: 2,
},
  bookImage: {
    width: 50,
    height: 60,
    backgroundColor: 'black',
    borderRadius: 6,
    marginRight: 12,
},
  bookDetails: { flex: 1 },
  bookTitle: { 
    fontWeight: 'bold', 
    fontSize: 16 
},
  bookAuthor: { 
    color: '#555', 
    marginTop: 2 
},
  statusBadge: {
    marginTop: 6,
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
},
});
