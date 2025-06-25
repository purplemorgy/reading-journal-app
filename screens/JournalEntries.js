import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import JournalEntryList from '../components/JournalEntryList';

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


      {/* Journal entry list */}
      <JournalEntryList bookTitle={bookTitle} bookAuthor={bookAuthor}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: 'white', 
},
  header: {
    marginTop: 70,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: 12,
    paddingLeft: 20,
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
