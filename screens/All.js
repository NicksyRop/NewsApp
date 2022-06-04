import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import {
  Box,
  NativeBaseProvider,
  FlatList,
  ScrollView,
  Divider,
  Image,
  Spinner,
} from "native-base";

import { services } from "../services";

const All = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    services("general")
      .then((data) => {
        setAllNews(data);
      })
      .catch((error) => {
        alert(error);
      });
  }, []);

  return (
    <Box>
      <ScrollView h="850">
        <FlatList
          data={allNews}
          renderItem={({ item }) => (
            <Box p="6">
              <View>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.date}>{item.publishedAt}</Text>
                <Text style={styles.descripion}>{item.description}</Text>
              </View>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "600",
  },
  descripion: {
    fontSize: 14,
    marginTop: 10,
  },
  date: {
    fontSize: 14,
  },
});

export default All;
