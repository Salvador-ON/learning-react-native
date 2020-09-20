import React from 'react';
import {useState} from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity ,Keyboard} from 'react-native'


const TextBox = ({addItem}) => {

  const [value, setValue] = useState('');

  const addElement = () => {
    addItem(value);
    setValue('');
  };

  return (
    <View style={styles.textBox}>
      <TextInput
      placeholder="add item"
      style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginLeft: 10, marginRight: 10}}
      onChangeText={text => setValue(text)}
      value={value}
    />

    <TouchableOpacity
      style={styles.button}
      onPress={addElement}
    >
      <Text style={styles.buttonText}> + Add Item</Text>
    </TouchableOpacity>

   
    </View>
    
   );
}
 
export default TextBox;

const styles = StyleSheet.create({
  textBox: {
    flexDirection: 'column',
    marginTop: 15,
  },
  button: {
    marginTop: 10,
    padding: 9,
    

    backgroundColor: '#c2bad8',
    marginLeft: 10,
    marginRight: 10
  },
  buttonText: {
    color: 'darkslateblue',
    fontSize: 20,
    textAlign: "center",
  }
})