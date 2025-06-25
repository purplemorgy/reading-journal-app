import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BookCard from '../components/BookCard';

export default function JournalEntriesScreen({ navigation, route }) {
  const { bookTitle, bookAuthor } = route.params;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#333" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Library</Text>
      </View>

      {/* Book card */}
      <BookCard bookTitle={bookTitle} bookAuthor={bookAuthor}/>

      {/* Journal entries */}
      <ScrollView style={styles.entryList}>
        {[1, 2, 3].map((i) => (
          <View key={i} style={styles.entry}>
            <View style={styles.entryHeader}>
              <Text style={styles.entryTitle}>Entry Title</Text>
              <View style={styles.dateBox}>
                <Text style={styles.dateText}>Date</Text>
              </View>
            </View>
            <Text style={styles.entryPreview}>Entry preview…</Text>
            <View style={styles.divider} />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
    padding: 20 
},
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
  },
  entryList: { padding: 10 },
  entry: { marginBottom: 12 },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  entryTitle: { 
    fontSize: 15, 
    fontWeight: '500' 
},
  dateBox: {
    borderWidth: 1,
    borderColor: '#a88ce1',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  dateText: { 
    fontSize: 12, 
    color: '#333' 
},
  entryPreview: { 
    marginTop: 4, 
    color: '#555' 
},
  divider: {
    height: 1,
    backgroundColor: '#eee',
    marginTop: 12,
  },
});
