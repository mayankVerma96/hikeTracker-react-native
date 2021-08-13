import React from "react";
import { Button } from "react-native-elements";
import { View, StyleSheet, Text } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import Spacer from "../components/Spacer";
import { Ionicons } from "@expo/vector-icons";

const AccountScreen = () => {
  const { signout } = React.useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 48 }}>Account Screen</Text>
        <Spacer />
        <Button title="Sign Out" onPress={signout}></Button>
      </View>
    </>
  );
};

AccountScreen.navigationOptions = {
  title: "Account",
  tabBarIcon: <Ionicons name="settings" size={20} color="black" />,
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
  },
});
export default AccountScreen;
