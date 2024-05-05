import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function Img({ navigation, route }: any) {
  const url = route.params.url
  return (
    <View style={styles.container}>
      <Image source={{ uri: url }} style={styles.img} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingTop: 50
  },
  link: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 18,
  },
  img: {
    width: '100%',
    height: '100%',
  }
});
