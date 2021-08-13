import React, { useContext } from "react";

import { ListItem, Text } from "react-native-elements";
import { NavigationEvents } from "react-navigation";
import { Context as TrackContext } from "../context/TrackContext";
import { View, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import Spacer from "../components/Spacer";

const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);

  return (
    <>
      <View style={styles.container}>
        <NavigationEvents onWillFocus={fetchTracks} />
        <FlatList
          data={state}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("TrackDetail", { _id: item._id })
                }
              >
                <View style={styles.trackWrapper}>
                  <Text style={styles.track}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            );
          }}
        />
      </View>
    </>
  );
};

TrackListScreen.navigationOptions = {
  title: "Tracks",
};

const styles = StyleSheet.create({
  container: {
    color: "#000000",
    margin: 15,
  },
  trackWrapper: {
    paddingVertical: 6,
    paddingHorizontal: 4,
  },
  track: {
    fontSize: 20,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
export default TrackListScreen;
