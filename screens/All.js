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
            <Box p="2.5">
              <View>
                <Text>{item.title}</Text>
                <Text>{item.publishedAt}</Text>
                <Text>{item.description}</Text>
              </View>
            </Box>
          )}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({});

export default All;
