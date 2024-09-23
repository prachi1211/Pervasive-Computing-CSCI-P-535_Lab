import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { auth } from "../firebase";

export default function HomeScreen({ navigation }) {
  const user = auth.currentUser; // Get the current user

  const onLogout = () => {
    auth
      .signOut()
      .then(() => {
        console.log("User signed out!");
        navigation.navigate("Sign In"); // Redirect to Sign In screen
      })
      .catch((error) => {
        console.error("Error signing out: ", error);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome!</Text>
      {user ? (
        <Text style={styles.email}>Email: {user.email}</Text>
      ) : (
        <Text style={styles.email}>No user logged in</Text>
      )}
      <Button title="Logout" onPress={onLogout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light background
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  email: {
    fontSize: 20,
    marginBottom: 20,
    color: "#333", // Darker text for better contrast
  },
});
