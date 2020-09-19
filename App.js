import React from 'react';
import { View, Text, StyleSheet, Image} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white'
  },
  title: {
    color: 'darkslateblue',
    fontSize: 40,
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2
  },
})
const App = () => {
  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>
        Hello World
      </Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img}></Image>
    </View>
   );
}
 //react-native run-android
//react-native start

export default App;