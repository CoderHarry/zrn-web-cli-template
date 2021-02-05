import React, { memo, useState, useEffect } from 'react'
import { 
  AppRegistry,
  View,
  Text,
  StyleSheet
} from 'react-native'

import ZRN from '@zto/zrn-js'
const { ZImage } = ZRN.Components

const Home = memo((props) => {
  
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        <Text style={{marginTop: 150, fontSize: 40, color:'#4a4a4a'}}>欢迎使用ZRN</Text>
        <Text style={{marginTop: 8, fontSize: 20, color:'#666666'}}>一种更加快速搭建页面的方式</Text>
        <ZImage source={{
          uri:"https://fscdn.zto.com/fs8/M02/9D/58/wKhBD2Acm_OABronAAAgKrrCE_M353.png"
          }} style={{width:100, height: 100, marginTop: 30}}/>
      </View>
      <Text style={{textAlign: 'right', color: "#666666", marginRight: 5, marginBottom: 5}}>by 技术平台部</Text>
    </View>
  )
}) ;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F8FF',
    flex: 1,
    justifyContent: 'space-between',
  },

  viewContainer: {
    alignItems: 'center',
  }
})

export default Home;
AppRegistry.registerComponent('Home', ()=>Home)