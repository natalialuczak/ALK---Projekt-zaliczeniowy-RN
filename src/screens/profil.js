import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";

const API_URL = "https://rickandmortyapi.com/api/character";

const fetchAvatar = async () => {
  const response = await fetch(`${API_URL}/1`);
  const data = await response.json();
  return data.image;
};

const fetchPosts = async () => {
  const response = await fetch(`${API_URL}`);
  const data = await response.json();
  return data.results;
};

const Profil = () => {
  const { data: avatar, isLoading: avatarLoading, isError: avatarError } = useQuery(["avatar"], fetchAvatar);
  const { data: posts, isLoading: postsLoading, isError: postsError } = useQuery(["posts"], fetchPosts);

  if (avatarLoading || postsLoading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (avatarError || postsError) {
    return (
      <View style={styles.errorContainer}>
        <Text>Coś poszło nie tak</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: avatar }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.username}>Username</Text>
          <Text style={styles.bio}>Bio</Text>
        </View>
      </View>
      <View style={styles.stats}>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>100</Text>
          <Text style={styles.statTitle}>Followers</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statCount}>200</Text>
          <Text style={styles.statTitle}>Following</Text>
        </View>
      </View>
      <View style={styles.postsContainer}>
        <FlatList
          data={posts}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Image style={styles.image} source={{ uri: item.image }} />
            </View>
          )}
          numColumns={3}
        />
      </View>
    </View>
  );
};

export default Profil;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  headerInfo: {
    flex: 1,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
  },
  bio: {
    fontSize: 14,
    color: "gray",
    fontWeight: "500",
    marginTop: 6,
  },
  stats: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  statItem: {
    alignItems: "center",
  },
  statCount: {
    fontSize: 16,
    fontWeight: "bold",
  },
  statTitle: {
    fontSize: 12,
    color: "gray",
  },
  postsContainer: {
    flex: 1,
    padding: 2,
  },
  itemContainer: {
    flex: 1,
    margin: 2,
  },
  image: {
    width: "100%",
    height: 100,
  },
});
