import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import BookCard from '../components/BookCard';

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.libraryTitle}>My Library</Text>
          <Text style={styles.subtitle}>12 books • 3 currently reading</Text>
        </View>
      </View>

      {/* Search bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={20} color="#555" />
        <TextInput
          style={styles.searchContent}
          placeholder="Search your books..."
        />
      </View>

      {/* Sort by and Add button */}
      <View style={styles.subheading}>
        <Text style={styles.sortBySelection}>Sort By:</Text>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.addButtonText}>Add book</Text>
        </TouchableOpacity>
      </View>

      {/* Book list */}
      <ScrollView contentContainerStyle={styles.bookList}>
        <BookCard bookTitle="Sample 1" bookAuthor="Sample 1 Author"/>
        <BookCard bookTitle="Title" bookAuthor="Author"/>
        <BookCard bookTitle="Sample 2" bookAuthor="Sample 2 Author" />
      </ScrollView>
    </View>
  );
}



const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    padding: 20 },
  header: {
    backgroundColor: '#8b6fc6',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  libraryTitle: { 
    fontSize: 22, 
    fontWeight: 'bold', 
    color: 'white' 
  },
  subtitle: { 
    color: 'white', 
    marginTop: 4 
  },
  searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    marginTop: -10,
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  searchContent: {
    marginLeft: 10,
},
  subheading: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sortBySelection: { fontSize: 18 },
  addButton: {
    backgroundColor: '#8b6fc6',
    width: 120,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonText: { color: 'white', 
    fontSize: 20, 
    fontWeight: 'bold' 
  },
  bookList: { paddingVertical: 10 },

});
