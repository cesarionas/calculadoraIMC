import React from "react";
import { View, Text } from "react-native";
import styles from "./styles"


export default function Title(){

    return(
      <View style={styles.boxTitle}>
          <Text style={styles.textTitle}> Calculadora IMC </Text>
      </View>
    );
}