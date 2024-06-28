import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";

const profiles = [
  { id: "1", name: "John Doe", imageUrl: "https://via.placeholder.com/150" },
  { id: "2", name: "Jane Smith", imageUrl: "https://via.placeholder.com/150" },
  { id: "3", name: "Sam Johnson", imageUrl: "https://via.placeholder.com/150" },
  { id: "4", name: "Emily Davis", imageUrl: "https://via.placeholder.com/150" },
  {
    id: "5",
    name: "Michael Brown",
    imageUrl: "https://via.placeholder.com/150",
  },
  {
    id: "6",
    name: "Jessica White",
    imageUrl: "https://via.placeholder.com/150",
  },
];

export default function HorizontalScroll() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {profiles.map((profile) => (
          <View key={profile.id} style={styles.profileContainer}>
            <Image
              source={{ uri: profile.imageUrl }}
              style={styles.profileImage}
            />
            <Text style={styles.profileName}>{profile.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const screenWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f8f8",
    marginTop: 20,
  },
  profileContainer: {
    width: screenWidth / 3,
    height: 200,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "#fff",
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 5,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
});
