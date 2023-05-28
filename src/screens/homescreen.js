import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Header from "../../src/components/HeaderTab";
import Posts from "../../src/screens/posts";
import Stories from "../../src/components/Stories";

export default function Homescreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Posts
        style={styles.scrollContainer}
        ListHeaderComponent={
          <>
            <Header />
            <Stories />
          </>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollContainer: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
