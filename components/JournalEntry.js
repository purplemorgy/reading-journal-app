import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function JournalEntry({ entryTitle, entryDate}) {
    return (
    <View style={styles.container}>
    
            <View style={styles.entry}>
            <View style={styles.entryHeader}>
                <Text style={styles.entryTitle}>{ entryTitle }</Text>
                <View style={styles.dateBox}>
                <Text style={styles.dateText}>{ entryDate }</Text>
                </View>
            </View>
            <Text style={styles.entryPreview}>Entry preview…</Text>
            <View style={styles.divider} />
            </View>
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
    marginTop: 70,
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