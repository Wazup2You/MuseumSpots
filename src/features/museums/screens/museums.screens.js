import React from "react";
import { Searchbar } from "react-native-paper";
import { StatusBar, StyleSheet, SafeAreaView, Text, View } from "react-native";
import { MuseumInfo } from "../components/museum-info.component";

export const MuseumsScreen = () => (
    <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <MuseumInfo />
    </View>
  </SafeAreaView>
)

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginTop: StatusBar.currentHeight,
    },
    search: {
      padding: 16,
    },
    list: {
      flex: 1,
      padding: 16,
      backgroundColor: "green",
    },
  });