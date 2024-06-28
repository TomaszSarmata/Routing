import { Pressable, View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.textContainer}>
        Navigate from the bottom of the app to view the styles for various app
        elements
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // borderColor: "red",
    // borderWidth: 2,
    marginTop: 250,
  },
  textContainer: {
    textAlign: "center",
    fontSize: 24,
    fontFamily: "Helvetica",
  },
});
