import {
  Pressable,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import React, { useState } from "react";

export default function Buttons() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.loginButton}
        onPress={() => console.log("Log In Pressed")}
      >
        <Text style={styles.buttonText}>Log In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => console.log("Log Out Pressed")}
      >
        <Text style={styles.buttonText}>Log Out</Text>
      </TouchableOpacity>
      <ToggleButton />
      <TouchableOpacity
        style={styles.mainButton}
        onPress={() => console.log("Main Button Pressed")}
      >
        <Text style={styles.buttonText}>Main Button</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}

const ToggleButton = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <TouchableOpacity
      style={[styles.toggleButton, isChecked && styles.toggleButtonChecked]}
      onPress={() => setIsChecked(!isChecked)}
    >
      <Text style={styles.buttonText}>
        {isChecked ? "Checked" : "Unchecked"}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  loginButton: {
    marginBottom: 20,
    backgroundColor: "#5362D2",
    backgroundColor: "#7BB9F8",
    // backgroundColor: "#3CCFB4",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  logoutButton: {
    marginBottom: 20,
    backgroundColor: "#f50057",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  toggleButton: {
    marginBottom: 20,
    backgroundColor: "#03dac6",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  toggleButtonChecked: {
    backgroundColor: "#018786",
  },
  mainButton: {
    backgroundColor: "#4caf50",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 25,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    textAlign: "center",
  },
});
