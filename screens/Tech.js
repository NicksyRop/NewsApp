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
import moment from "moment";

import { services } from "../services";

const Tech = () => {
  const [allNews, setAllNews] = useState([]);

  useEffect(() => {
    services("technology")
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
        {allNews.length > 1 ? (
          <FlatList
            data={allNews}
            renderItem={({ item }) => (
              <Box p="5">
                <View>
                  <Image
                    source={{ uri: item.urlToImage }}
                    resizeMode="cover"
                    alt="Photo image"
                    width="100%"
                    height={250}
                  />
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.date}>
                    {moment(item.publishedAt).format("LLL")}
                  </Text>
                  <Text style={styles.descripion}>{item.description}</Text>
                </View>
              </Box>
            )}
            keyExtractor={(item) => item.id}
          />
        ) : (
          <HStack space={2} alignItems="center">
            <Spinner accessibilityLabel="Loading posts" />
            <Heading color="primary.500" fontSize="md">
              Loading
            </Heading>
          </HStack>
        )}
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

export default Tech;
