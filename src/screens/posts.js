import React from "react";
import { View, Text, StyleSheet, FlatList, Image, Dimensions, TouchableOpacity } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Feather } from "@expo/vector-icons";

const API_URL = "https://rickandmortyapi.com/api/character";

const fetchPosts = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
};

const SCREEN_WIDTH = Dimensions.get("window").width;

const PostFooter = () => (
  <View style={styles.footerContainer}>
    <View style={styles.iconsContainer}>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather name="heart" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather name="message-circle" size={24} color="black" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconContainer}>
        <Feather style={styles.icon} name="send" size={24} color="black" />
      </TouchableOpacity>
    </View>
    <View style={styles.likesCommentsContainer}>
      <Text style={styles.likesText}>120 likes</Text>
    </View>
  </View>
);

const PostDescriptions = () => (
  <View style={styles.commentsContainer}>
    <Text style={styles.commentText}>
      <Text style={styles.commentUsername}></Text>Lorem Ipsum is
      simply dummy text of the printing and typesetting industry. ❤️{" "}
    </Text>
  </View>
);

const PostComments = () => (
  <View style={styles.commentsContainer}>
    <Text style={styles.commentText}>
      <Text style={styles.commentviewall}>
        Zobacz wszystkie komentarze: 100
      </Text>
    </Text>
    <Text style={styles.commenttransalte}>Zobacz tłumaczenie</Text>
  </View>
);

const Posts = (props) => {
  const { data, isLoading, isError } = useQuery(["posts"], fetchPosts);

  if (isLoading) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View style={styles.centeredContainer}>
        <Text>Something went wrong</Text>
      </View>
    );
  }

  const renderItem = ({ item }) => (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <Image style={styles.avatar} source={{ uri: item.image }} />
        <Text style={styles.username}>{item.name}</Text>
      </View>
      <View style={styles.postImageContainer}>
        <Image style={styles.postImage} source={{ uri: item.image }} />
      </View>
      <PostFooter />
      <PostDescriptions />
      <PostComments/>
    </View>
  );

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.flatListContainer}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  centeredContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  flatListContainer: {
    paddingBottom: 20,
  },
  postContainer: {
    marginBottom: 20,
  },
  postHeader: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  username: {
    marginLeft: 10,
    fontWeight: "bold",
  },
  postImageContainer: {
    alignItems: "center",
  },
  postImage: {
    width: SCREEN_WIDTH * 0.95,
    height: SCREEN_WIDTH * 0.95,
  },
  footerContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  iconsContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  iconContainer: {
    marginRight: 12,
  },
  likesCommentsContainer: {
    flexDirection: "row",
  },
  likesText: {
    marginRight: 10,
    fontWeight: "bold",
  },
  commentsText: {
    color: "gray",
  },
  commentsContainer: {
    marginTop: 10,
    paddingHorizontal: 10,
  },
  commentText: {
    marginBottom: 5,
  },
  commentUsername: {
    fontWeight: "bold",
  },
  commentsContainer: {
    marginTop: 4,
    paddingHorizontal: 10,
  },
  commentUsername: {
    fontWeight: "bold",
    marginRight: 4,
  },
  commenttransalte: {
    fontWeight: "700",
    fontSize: 10,
    marginTop: 4,
  },
  commentviewall: {
    fontWeight: "500",
    fontSize: 12,
  },
});

export default Posts;
