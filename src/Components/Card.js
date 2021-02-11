import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

const Card = ({
  title, url
}) => {
    return (
        <View style={styles.container}>
          <Text style={styles.title}>
            {title}
          </Text>
          <View>
            <Image
                style={styles.img}
                source={{uri: `${url}`,}}
            />
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 15,
      justifyContent: "center",
      flexDirection: "column",
      borderWidth: 2,
      borderColor: "#43C23D",
      marginBottom: 10,
    },
    title: {
      fontSize: 7,
      color: "#000",
      marginBottom: 10,
      borderStyle: "dotted",
      borderBottomWidth: 2,
      borderColor: "#454d6e",
    },
    img: {
        width: 150,
        height: 150,
    }
  });

export default Card;