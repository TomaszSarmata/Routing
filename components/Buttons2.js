import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const Buttons2 = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.primaryButton}>
        <Text style={styles.buttonText}>Primary Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.secondaryButton}>
        <Text style={styles.buttonText}>Secondary Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.outlineButton}>
        <Text style={styles.outlineButtonText}>Outline Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.iconButton}>
        <MaterialIcons name="add" size={24} color="white" />
        <Text style={styles.buttonText}>Icon Button</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.roundButton}>
        <MaterialIcons name="favorite" size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  primaryButton: {
    backgroundColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 10,
  },
  secondaryButton: {
    backgroundColor: "#6c757d",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 10,
  },
  outlineButton: {
    borderWidth: 2,
    borderColor: "#007bff",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 10,
  },
  outlineButtonText: {
    color: "#007bff",
    fontSize: 16,
    textAlign: "center",
  },
  iconButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#28a745",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    marginVertical: 10,
  },
  roundButton: {
    backgroundColor: "#dc3545",
    padding: 20,
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginLeft: 8,
  },
});

export default Buttons2;
