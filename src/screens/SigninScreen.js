import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { NavigationEvents } from "react-navigation";

import AuthForm from "../components/AuthForms";
import NavLink from "../components/NavLink";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);
  return (
    <>
      <View style={styles.container}>
        {/* <NavigationEvents onWillBlur={(payload) => console.log(payload)} /> */}
        <AuthForm
          headerText="Sign In to Your Account"
          errorMessage={state.errorMessage}
          submitButtonText="Sign In"
          onSubmit={signin}
        />
        <Spacer />
        <NavLink
          text="Don't have an account? Sign up instead"
          routeName="Signup"
        />
      </View>
    </>
  );
};

SigninScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginHorizontal: 15,
    marginBottom: 150,
  },
});

export default SigninScreen;
