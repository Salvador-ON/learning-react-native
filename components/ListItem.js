import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native'
import Icon from 'react-native-vector-icons/dist/FontAwesome'

const styles = StyleSheet.create({
  listItem:{
    padding: 15,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderColor: '#eee'
  },
  listItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize:18,
  }
})

const ListItem = ({item, removeItem}) => {
  return ( 
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>
          {item.text}
        </Text>
        <Icon name="remove" size={28} color="firebrick"/>
      </View>
    </TouchableOpacity>
   );
}
 
export default ListItem;