import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForms";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <>
      <View style={styles.container}>
        <AuthForm
          headerText="Sign Up for Tracker"
          errorMessage={state.errorMessage}
          submitButtonText="Sign Up"
          onSubmit={signup}
        />
        <Spacer />
        <NavLink
          text="Already have an account? Sign in instead"
          routeName="Signin"
        />
      </View>
    </>
  );
};

SignupScreen.navigationOptions = () => {
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
export default SignupScreen;
