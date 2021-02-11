import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import apiImage from "./src/Api/api.js";
import Card from "./src/Components/Card"
import Card2 from "./src/Components/Card2"


export default function App() {
  const [info, setInfo] = useState([]);

  const getInfo = async () => {
    const information = await apiImage();
    
    setInfo(information);
  }

  getInfo();

  return (
    <ScrollView>
      {info.length ? (
        <View style={styles.container}>
          <Card 
            title={info[4999].title}
            url={info[4999].url}
          />
          <Card2 
            title={info[4998].title}
            url={info[4998].url}
          />
          <Card 
            title={info[4949].title}
            url={info[4999].url}
          />
          <Card2 
            title={info[4948].title}
            url={info[4998].url}
          />
          <Card 
            title={info[4899].title}
            url={info[4999].url}
          />
          <Card2 
            title={info[4898].title}
            url={info[4998].url}
          />
        </View>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    color: '#000'
  },
});
