import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import JournalEntryList from '../components/JournalEntryList';

export default function CurrentBookScreen() {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerText}>Currently Reading...</Text>
            </View>

            <JournalEntryList bookTitle="Title" bookAuthor="Author"/>
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
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
    color: '#8b6fc6',
  }
});