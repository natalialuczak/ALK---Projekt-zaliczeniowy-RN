import React from "react";
import { View, Text, ScrollView, Image, StyleSheet } from "react-native";
import Users from "./StoriesData";

const Stories = () => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {Users.map((story, index) => (
          <View key={index} style={styles.storyView}>
            <Image source={{ uri: story.image }} style={styles.story} />
            <Text style={styles.storyText}>
              {story.user.length > 10 ? story.user.slice(0, 10).toLowerCase() + '...' : story.user}
            </Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16
  },
  story: {
    width: 60,
    height: 60,
    borderRadius: 100,
    marginLeft: 16,
    borderWidth: 3,
    borderColor: "#eb8934",
  },
  storyText: {
    fontSize: 12,
    fontWeight: "600",
    marginTop: 4,
    marginLeft: 16,
    color: "#262626",
  },
  storyView: {
    alignItems: "center",
  },
});

export default Stories;