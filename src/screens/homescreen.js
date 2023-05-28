import React from "react";
import { SafeAreaView, StyleSheet, FlatList } from "react-native";
import Header from "../../src/components/HeaderTab";
import Posts from "../../src/screens/posts";
import Stories from "../../src/components/Stories";

export default function Homescreen() {
  const data = Posts;

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={styles.scrollContainer}
        ListHeaderComponent={
          <>
            <Header />
            <Stories />
          </>
        }
        ListFooterComponent={<Posts />}
        data={data}
        renderItem={({ item }) => item}
        keyExtractor={(index) => index.toString()}
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
