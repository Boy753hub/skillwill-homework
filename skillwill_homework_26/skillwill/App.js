import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import contacts, { compareNames } from './contacts';
import ContactsList from './contactsList';

export default function App() {
  const [showContacts, setShowContacts] = useState(false)
  const [sortedContacts, setSortedContacts] = useState(contacts)
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  

  const handleSearchSubmit = () => {
    setSearchResult(contacts.filter(item =>
      item.name.toLowerCase().includes(searchText.toLowerCase())
    ));
    setSearchText('');
  };
  console.log(searchResult)


  const toggleContacts = () => {
    setShowContacts((prev)=> !prev)
  }

  const sort = () => {
    setSortedContacts((prev) => [...prev.sort(compareNames)])
  }

  return (
    <SafeAreaView  style={styles.safeArea}>
      <Button title='toggle contacts' onPress={toggleContacts}/>
      <Button title='sort' onPress={sort}/>
      <TextInput
        style={styles.input}
        placeholder="Search"
        value={searchText}
        onChangeText={setSearchText}
        onSubmitEditing={handleSearchSubmit}
        returnKeyType="search" 
      />
        <View style={styles.search}>
          {searchResult.length > 0 && <ContactsList contacts={searchResult}/>}
        </View>
      {showContacts && searchText.length == 0 && <ContactsList contacts={sortedContacts}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  search:{
    backgroundColor: 'gray',
    borderWidth: 2,
    borderColor: 'black', 
    borderRadius: 10,  
  }
});
