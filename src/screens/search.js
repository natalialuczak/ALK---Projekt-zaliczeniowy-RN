import React from "react";
import { View, Text, TextInput, StyleSheet, Image, FlatList } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useQuery } from "@tanstack/react-query";

const Search = () => {
  return (
    <View style={styles.container}>
      <SearchBar />
      <SearchGrid />
    </View>
  );
};

const SearchBar = () => {
  return (
    <View style={styles.containerBox}>
      <Ionicons name="search" size={18} color="#888" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Szukaj..."
        placeholderTextColor="#888"
      />
    </View>
  );
};

const API_URL = "https://rickandmortyapi.com/api/character";

const fetchCharacters = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.results;
};

const SearchGrid = () => {
  const { data, isLoading, isError } = useQuery(["characters"], fetchCharacters);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (isError) {
    return <Text>Error occurred while fetching data</Text>;
  }

  return (
    <View style={styles.containerGrid}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image style={styles.image} source={{ uri: item.image }} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    position: "relative",
  },
  containerBox: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginHorizontal: 16,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    fontSize: 16,
    color: "#333",
  },
  containerGrid: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    flex: 1,
    margin: 1,
    aspectRatio: 1,
    borderRadius: 1,
    overflow: "hidden",
  },
  image: {
    flex: 1,
  },
});

export default Search;