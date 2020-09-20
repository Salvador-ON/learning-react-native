import React from 'react';
import {useState} from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Header from './components/Header'
import ListItem from './components/ListItem'
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';
import TextBox from './components/TextBox';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: 'black',
    fontSize: 40,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
})


const App = () => {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  const [items, setItems] = useState([
    {id:uuidv4(), text: 'Milk'},
    {id:uuidv4(), text: 'Eggs'},
    {id:uuidv4(), text: 'Bread'},
    {id:uuidv4(), text: 'Ice cream'},
  ]);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const addItem = (item) => {
    const newItem = {id:uuidv4(), text: item}
    setItems(items.concat(newItem));
  };



  return ( 
    <View style={styles.container}>
      <Header title="Shopping List"/>

      <TextBox addItem={addItem}/>

      <FlatList
        data={items}
        renderItem={({item})=> <ListItem item={item} removeItem={removeItem}/>}
        keyExtractor={item => item.id}
      />


      
    </View>
   );
}
 //react-native run-android
//react-native start

export default App;